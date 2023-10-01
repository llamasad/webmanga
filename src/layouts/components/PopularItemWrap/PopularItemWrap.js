import { useEffect, useState, useRef, createContext } from 'react';
import classNames from 'classnames/bind';

import { recomendService } from '~/services/recomendService';
import PopularItem from '../PopularItem';
import styles from './PopularItemWrap.module.scss';

export const Location = createContext(null);
const cx = classNames.bind(styles);
function PopularItemWrap() {
  const [recommendValue, setRecommendValue] = useState('');
  const element = useRef('');
  let location = useRef();
  let dragging = useRef(false);
  let transform = useRef(0);

  useEffect(() => {
    recomendService().then((value) => {
      setRecommendValue(value);
    });
  }, []);

  useEffect(() => {
    if (element.current) {
      let firstChild = Array.from(element.current.childNodes)[0];
      window.onmouseup = handleMouseUp;
      window.onmousemove = handleDraging;
      let direct = -1;
      if (firstChild) {
        var lastTime = setInterval(() => {
          let vector;
          let itemWidth = firstChild.offsetWidth + 20;
          let residual = element.current.offsetWidth % itemWidth;
          let maxWidth = -(recommendValue.length * itemWidth - element.current.offsetWidth);
          if (!dragging.current) {
            if (maxWidth + itemWidth - residual === transform.current) {
              vector = -itemWidth + residual;
              direct = -direct;
            } else if (transform.current === -itemWidth + residual) {
              vector = itemWidth - residual;
              direct = -direct;
            } else if (
              transform.current + itemWidth * direct <= 0 &&
              transform.current + itemWidth * direct >= maxWidth
            ) {
              vector = itemWidth * direct;
            } else if (transform.current + itemWidth * direct > 0) {
              transform.current = 0;
              element.current.style.transform = `translateX(${transform.current}px)`;
              direct = -1;
              return;
            } else {
              transform.current = maxWidth;
              element.current.style.transform = `translateX(${transform.current}px)`;
              direct = +1;
              return;
            }

            transform.current = transform.current + vector;
            element.current.style.transform = `translateX(${transform.current}px)`;
          }
        }, 6000);
      }
    }
    return () => {
      if (lastTime) {
        clearInterval(lastTime);
      }
    };
  }, [element.current]);

  function handleLeftBtn(ev) {
    ev.stopPropagation();
    let itemWidth = Array.from(element.current.childNodes)[0].offsetWidth + 20;
    let residual = element.current.offsetWidth % itemWidth;
    if (transform.current >= 0) {
      return;
    }
    if (transform.current < -itemWidth + residual) {
      transform.current = transform.current + itemWidth;
    } else if (transform.current === -itemWidth + residual) {
      transform.current = transform.current + itemWidth - residual;
    } else {
      transform.current = 0;
    }
    element.current.style.transform = `translateX(${transform.current}px)`;
  }

  function handleRightBtn(ev) {
    ev.stopPropagation();
    let itemWidth = Array.from(element.current.childNodes)[0].offsetWidth + 20;
    let residual = element.current.offsetWidth % itemWidth;
    let maxWidth = -(recommendValue.length * itemWidth - element.current.offsetWidth);
    if (transform.current <= maxWidth) {
      return;
    }
    if (transform.current > maxWidth + itemWidth - residual) {
      transform.current = transform.current - itemWidth;
    } else if (transform.current === maxWidth + itemWidth - residual) {
      transform.current = transform.current - itemWidth + residual;
    } else {
      transform.current = maxWidth;
    }
    element.current.style.transform = `translateX(${transform.current}px)`;
  }
  function handleMouseDown(ev) {
    if (ev.button === 0 || ev.type === 'touchstart') {
      location.current = {
        x: ev.clientX || Array.from(ev.touches)[0].clientX,
        y: ev.clientY || Array.from(ev.touches)[0].clientY,
      };
      dragging.current = true;

      element.current.style.transition = 'none';
    }
  }
  function handleDraging(ev) {
    if (dragging.current) {
      let itemWidth = Array.from(element.current.childNodes)[0].offsetWidth + 20;
      let maxWidth = -(recommendValue.length * itemWidth - element.current.offsetWidth);
      var locateX = ev.clientX || Array.from(ev.touches)[0].clientX;
      const vector = locateX - location.current.x;

      if (!ev.clientX) {
        location.current.touchEndX = Array.from(ev.touches)[0].clientX;
      }

      if (transform.current + vector < 30 && transform.current + vector > maxWidth - 30) {
        element.current.style.transform = `translateX(${transform.current + vector}px)`;
      }
    }
  }
  function handleMouseUp(ev) {
    ev.stopPropagation();

    if ((ev.button === 0 || ev.type === 'touchend') && dragging.current) {
      let itemWidth = Array.from(element.current.childNodes)[0].offsetWidth + 20;
      const dragX = (ev.clientX || location.current.touchEndX) - location.current.x;
      let maxWidth = -(recommendValue.length * itemWidth - element.current.offsetWidth);
      let residual = (transform.current + dragX) % itemWidth;
      dragging.current = false;
      if (transform.current + dragX > 0) {
        transform.current = 0;
      } else if (transform.current + dragX < maxWidth) {
        transform.current = maxWidth;
      } else {
        transform.current = Math.round(residual / itemWidth)
          ? transform.current + dragX - (itemWidth + residual)
          : transform.current + dragX - residual;
      }

      element.current.style.transform = `translateX(${transform.current}px)`;

      element.current.style.transition = 'transform ease 0.6s';
    }
  }
  return (
    <div
      className={cx('container')}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleDraging}
    >
      <Location.Provider value={location}>
        <ul
          className={cx('list')}
          ref={element}
          onMouseMove={handleDraging}
          onMouseDown={handleMouseDown}
          onMouseUpCapture={handleMouseUp}
          onMouseUp={handleMouseUp}
        >
          {recommendValue &&
            recommendValue.map((value, index) => {
              return (
                <li key={index} className={cx('item')}>
                  <PopularItem data={value} />
                </li>
              );
            })}
        </ul>
      </Location.Provider>
      <button
        className={cx('btn-left', 'btn', recommendValue !== '' ? '' : 'disable')}
        onClick={handleLeftBtn}
        onTouchStart={(ev) => ev.stopPropagation()}
        onTouchEnd={(ev) => ev.stopPropagation()}
      >
        <i className="fa-solid fa-arrow-left"></i>
      </button>
      <button
        className={cx('btn-right', 'btn', recommendValue !== '' ? '' : 'disable')}
        onClick={handleRightBtn}
        onTouchStart={(ev) => ev.stopPropagation()}
        onTouchEnd={(ev) => ev.stopPropagation()}
      >
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default PopularItemWrap;
