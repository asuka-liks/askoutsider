export type Language = 'zh' | 'en';

export interface Translations {
  site: {
    name: string;
    email: string;
  };
  header: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    welcome: string;
    taglines: string[];
    cta: string;
    scroll: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  projects: {
    title: string;
    subtitle: string;
    items: {
      id: string;
      title: string;
      summary: string;
      tags: string[];
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    response: string;
  };
  footer: {
    madeWith: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  zh: {
    site: {
      name: 'AskOutsider',
      email: '1286382298@qq.com',
    },
    header: {
      about: '关于',
      skills: '技能',
      projects: '项目',
      contact: '联系',
    },
    hero: {
      welcome: '欢迎来到我的小天地',
      taglines: [
        '建造有意义的东西。',
        '探索未知的世界。',
        '写代码，也写诗。',
        '永远是局外人，从不随波逐流。',
      ],
      cta: '查看我的作品',
      scroll: '向下滚动',
    },
    about: {
      title: '关于我',
      paragraphs: [
        '计算机科学与技术专业毕业。擅长 C++ 和 Python，在机器学习和 Web 全栈开发方面有一定的项目实践经验。',
        '喜欢钻研前沿技术，对 AI 驱动的开发范式（Vibe Coding）充满兴趣，乐于探索技术与创造力的交叉点。',
        '这个网站是我在互联网上的一角——一个分享我所建造、所学和所感的地方。',
      ],
    },
    skills: {
      title: '我的技能',
      categories: [
        {
          name: '编程语言',
          items: ['C++', 'Python', 'Java', 'TypeScript'],
        },
        {
          name: 'AI & 数据',
          items: ['Scikit-learn', 'NumPy', 'Pandas', 'PyTorch'],
        },
        {
          name: 'Web 开发',
          items: ['Nuxt 3', 'React', 'Spring Boot', 'MySQL'],
        },
        {
          name: '工具',
          items: ['Git', 'Docker', 'Linux', 'VS Code'],
        },
      ],
    },
    projects: {
      title: '项目',
      subtitle: '一些我用心建造的作品。',
      items: [
        {
          id: 'fortune',
          title: 'Fortune',
          summary: '一个神秘的占卜体验。抽签、翻塔罗牌、打开幸运饼干——看看宇宙为你准备了什么。',
          tags: ['React', '动画', '交互'],
        },
        {
          id: 'coming-soon-1',
          title: '敬请期待',
          summary: '新东西正在酝酿中。敬请期待。',
          tags: ['即将推出'],
        },
        {
          id: 'coming-soon-2',
          title: '敬请期待',
          summary: '创意正在成形。保持关注。',
          tags: ['即将推出'],
        },
      ],
    },
    contact: {
      title: '联系我',
      subtitle: '无论是关于项目、合作，还是只是一次对话——我都很乐意收到你的消息。',
      response: '我通常在 24 小时内回复。',
    },
    footer: {
      madeWith: '用心建造。',
    },
  },
  en: {
    site: {
      name: 'AskOutsider',
      email: '1286382298@qq.com',
    },
    header: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Welcome to my corner of the internet',
      taglines: [
        'Building things that matter.',
        'Exploring the unknown.',
        'Writing code & poetry.',
        'Always the outsider, never the follower.',
      ],
      cta: 'Explore My Work',
      scroll: 'Scroll',
    },
    about: {
      title: 'About Me',
      paragraphs: [
        'Graduated with a degree in Computer Science. Proficient in C++ and Python, with project experience in machine learning and full-stack web development.',
        'Passionate about cutting-edge technology and AI-driven development paradigms (Vibe Coding). Always exploring the intersection of technology and creativity.',
        'This site is my little corner of the internet — a place to share what I build, what I learn, and what moves me.',
      ],
    },
    skills: {
      title: 'What I Work With',
      categories: [
        {
          name: 'Languages',
          items: ['C++', 'Python', 'Java', 'TypeScript'],
        },
        {
          name: 'AI & Data',
          items: ['Scikit-learn', 'NumPy', 'Pandas', 'PyTorch'],
        },
        {
          name: 'Web Dev',
          items: ['Nuxt 3', 'React', 'Spring Boot', 'MySQL'],
        },
        {
          name: 'Tools',
          items: ['Git', 'Docker', 'Linux', 'VS Code'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: "A few things I've built with love.",
      items: [
        {
          id: 'fortune',
          title: 'Fortune',
          summary: "A mystical divination experience. Draw fortune sticks, flip tarot cards, crack open fortune cookies — and see what the universe has in store for you.",
          tags: ['React', 'Animation', 'Interactive'],
        },
        {
          id: 'coming-soon-1',
          title: 'Coming Soon',
          summary: "Something new is brewing. Check back later.",
          tags: ['Coming Soon'],
        },
        {
          id: 'coming-soon-2',
          title: 'Coming Soon',
          summary: 'Ideas are taking shape. Stay tuned.',
          tags: ['Coming Soon'],
        },
      ],
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Whether it's about a project, a collaboration, or just a conversation — I'd love to hear from you.",
      response: 'I usually respond within 24 hours.',
    },
    footer: {
      madeWith: 'Made with care.',
    },
  },
};
