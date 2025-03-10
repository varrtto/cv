export type Translation = {
  name: string;
  title: string;
  about: string;
  aboutText: string;
  relevantWorkExperience: string;
  workExperience: {
    company: string;
    title: string;
    date: string;
    description: string;
  }[];
  education: {
    title: string;
    text: string;
  };
  certificates: {
    title: string;
    list: string[];
  };
  references: {
    title: string;
    list: {
      contact: string;
      phone: string;
    }[];
  };
  sidebar: {
    skills: {
      title: string;
      items: string[];
    };
    languages: {
      title: string;
      items: string[];
    };
    links: {
      title: string;
      github: string;
      linkedin: string;
    };
    contact: {
      title: string;
      email: string;
      phone: string;
      location: string;
    };
  };
};
