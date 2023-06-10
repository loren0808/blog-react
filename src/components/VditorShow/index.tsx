import 'vditor/dist/index.css';
import './index.css';

import classNames from 'classnames';
import React, { useCallback, useEffect, useRef } from 'react';
import Vditor from 'vditor';

import s from './index.scss';
interface VditorShowProps {
  text: string;
}
const VditorShow: React.FC<VditorShowProps> = ({ text }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const headingElements = useRef<Element[]>([]);
  const handleScroll = useCallback(() => {
    let toc: any[] = [];
    const scrollTop = window.scrollY;
    headingElements.current.forEach((item: any) => {
      toc.push({
        id: item.id,
        offsetTop: item.offsetTop
      });
    });
    const currentElement = document.querySelector('.vditor-outline__item--current') as HTMLElement;
    const outlineElement = document.querySelector('.vditor-outline ul') as HTMLElement;
    for (let i = 0, iMax = toc.length; i < iMax; i++) {
      if (scrollTop < toc[i].offsetTop - 44) {
        if (currentElement) {
          currentElement.classList.remove('vditor-outline__item--current');
        }
        let index = i > 0 ? i - 1 : 0;
        const current = document.querySelector('span[data-target-id="' + toc[index].id + '"]') as HTMLElement;
        current.classList.add('vditor-outline__item--current');
        console.log(outlineElement.scrollTop - current.offsetTop)
        if (
          current.offsetTop - outlineElement.scrollTop > outlineElement.clientHeight ||
          outlineElement.scrollTop - current.offsetTop > 0
        ) {
          outlineElement.scrollTo(0, current.offsetTop);
        }
        break;
      }
    }
  }, []);
  const initOutline = () => {
    window.addEventListener('scroll', handleScroll);
  };

  useEffect(() => {
    Vditor.preview(editorRef.current!, text, {
      mode: 'light',
      // lazyLoadImage: '',
      hljs: {
        lineNumber: true,
        style: 'rrt'
      },
      markdown: {
        toc: true
      },
      after() {
        Vditor.outlineRender(editorRef.current!, outlineRef.current!);
        Array.from(editorRef.current!.children).forEach((item) => {
          if (item.tagName.length === 2 && item.tagName !== 'HR' && item.tagName.indexOf('H') === 0) {
            headingElements.current.push(item);
          }
        });
        initOutline();
      }
    });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={classNames(s.showArea, 'vditor-reset')} ref={editorRef} />
      <div ref={outlineRef} />
    </>
  );
};
export default VditorShow;
