import { ArticleDetailsDataType } from '@/entities/ArticleDetails';
import { Comment } from '@/entities/Comments';

export const ArticleDetailsMock: ArticleDetailsDataType = {
  blocks: [
    {
      id: '1',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
      title: 'Заголовок этого блока',
      type: 'TEXT',
    },
    {
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
      id: '4',
      type: 'CODE',
    },
    {
      id: '5',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
      ],
      title: 'Заголовок этого блока',
      type: 'TEXT',
    },
    {
      id: '2',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
      type: 'IMAGE',
    },
    {
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
      id: '3',
      type: 'CODE',
    },
    {
      id: '7',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
      title: 'Заголовок этого блока',
      type: 'TEXT',
    },
    {
      id: '8',
      src: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
      title: 'Рисунок 1 - скриншот сайта',
      type: 'IMAGE',
    },
    {
      id: '9',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
      title: 'Заголовок этого блока',
      type: 'TEXT',
    },
  ],
  createdAt: '10.22.2023',
  id: '1',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  subtitle: 'subtitle',
  title: 'title',
  type: ['IT'],
  user: {
    avatar: 'avatar',
    id: '1',
    isAuth: true,
    username: 'username',
  },
  views: 123,
};

export const articleDetailsCommentsMock: Comment[] = [
  {
    comment: 'some comment',
    id: '1',
    user: {
      avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg',
      id: '1',
      username: 'admin',
    },
  },
  {
    comment: 'Новый комментарий',
    id: '2',
    user: {
      avatar:
        'https://w0.peakpx.com/wallpaper/165/445/HD-wallpaper-neon-mask-hacker-hackers-lonely-hacker-neon-mask.jpg',
      id: '2',
      username: 'user',
    },
  },
];
