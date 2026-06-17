// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Articles and notes by Youssouf Kiendrebeogo on economics, AI, development, and data science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Research by Youssouf Kiendrebeogo.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Courses taught at the University of Auvergne (CERDI), France.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "List of invited talks and academic conference presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-supervision",
          title: "Supervision",
          description: "My thesis supervisions, past and present.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervision/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "CV of Youssouf Kiendrebeogo: education, publications, research experience, and professional activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-ddd-estimators-and-distributional-effects",
        
          title: 'DDD Estimators and Distributional Effects <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A discussion of recent developments in Difference-in-Differences (DDD) estimation, focusing on how to account for distributional effects....",
        section: "Posts",
        handler: () => {
          
            window.open("https://diddigest.substack.com/p/ddd-estimators-distributional-effects", "_blank");
          
        },
      },{id: "post-who-supports-violent-extremism-in-developing-countries",
        
          title: 'Who supports violent extremism in developing countries? <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Media coverage of research on attitudes toward terrorism based on value surveys.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.washingtonpost.com", "_blank");
          
        },
      },{id: "post-two-ways-financial-crises-affect-export-dynamics",
        
          title: 'Two Ways Financial Crises Affect Export Dynamics <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Blog post on the channels through which banking crises affect bilateral exports.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blogs.worldbank.org", "_blank");
          
        },
      },{id: "post-financial-constraints-and-export-market-participation-in-the-arab-republic-of-egypt",
        
          title: 'Financial constraints and export market participation in the Arab Republic of Egypt <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Blog post on how financial constraints limit export participation among Egyptian manufacturing firms.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blogs.worldbank.org", "_blank");
          
        },
      },{id: "post-the-power-of-investing-in-girls-in-sierra-leone",
        
          title: 'The Power of Investing in Girls in Sierra Leone <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Blog post on the returns to education investments for girls in Sierra Leone.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.brookings.edu", "_blank");
          
        },
      },{id: "post-human-development-accounting",
        
          title: 'Human development accounting <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Blog post on measuring and decomposing human development outcomes across countries.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blogs.worldbank.org", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "gallery_events-2025-best-master-39-s-thesis-award",
          title: '2025 Best Master&amp;#39;s Thesis Award',
          description: "Zhan-Yi Liao (M.S., NYCU; co-advised with Po-An Chen) recognized by the Algorithms and Computation Theory Society of Taiwan, presented at CMCT 2026.",
          section: "Gallery_events",handler: () => {
              window.location.href = "/gallery/zhanyi-2025-cmct/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teaching-experiments-and-causal-inference",
          title: 'Experiments and Causal Inference',
          description: "A graduate seminar on experimental and quasi-experimental designs for causal inference.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/eci/";
            },},{id: "teaching-programming-for-business-analytics",
          title: 'Programming for Business Analytics',
          description: "This course introduces the basics of programming using R for business applications.",
          section: "Teaching",handler: () => {
              window.location.href = "/teaching/pba/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ykiendrebeogo", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/y_kiendrebeogo", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
