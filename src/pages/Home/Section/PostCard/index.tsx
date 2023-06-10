import dayjs from 'dayjs';
import React, { MouseEventHandler } from 'react';

import Card from '@/components/Card';
import ImgItem from '@/components/ImgItem';

import s from './index.scss';
import PostCardLoading from './PostCardLoading';
interface Props {
  title?: string;
  content?: string;
  date?: string;
  tags?: any[];
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const url = 'https://p7.itc.cn/images01/20211123/ca47074f55954f32a596141cc77aeb17.jpeg';
const PostCard: React.FC<Props> = ({ title, content, date, tags, loading, onClick }) => {
  return (
    <Card className={s.card} onClick={onClick}>
      {loading ? (
        <PostCardLoading />
      ) : (
        <>
          <ImgItem url={url} />
          <div className={s.title}>{title}</div>
          <p className={s.content}>{content!.replace(/<a(.*?)>(.*?)<\/a>/g, '$2').replace(/[# |**|`|>]/g, '')}</p>
          <div className={s.info}>
            <span className={s.date}>{dayjs(date!).format('YYYY-MM-DD')}</span>
            <div className={s.tags}>
              {tags!.map(({ _id, name }) => (
                <span className={s.tag} key={_id}>
                  {name}
                </span>
              ))}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default PostCard;
