import { v4 as uuidV4 } from "uuid";

export interface Content {
  type: string;
  content: string;
}

export interface Author {
  authorUrl: string;
  name: string;
  role: string;
}

export const posts = [
  {
    id: uuidV4(),
    author: {
      authorUrl: "http://github.com/ericDK89.png",
      name: "Eric Macedo",
      role: "Web Developer | Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: uuidV4(),
    author: {
      authorUrl: "http://github.com/ericDK89.png",

      name: "Drift King",
      role: "Back-End Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-05-27 22:00:00"),
  },
];
