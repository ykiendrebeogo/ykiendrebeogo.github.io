// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "Articles and notes by Youssouf Kiendrebeogo on economics, AI, development, and data science.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Research by Youssouf Kiendrebeogo.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "List of invited talks and academic conference presentations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-supervision",
          title: "supervision",
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
        },{id: "post-why-causal-mechanisms-are-harder-than-you-think",
        
          title: "Why Causal Mechanisms Are Harder Than You Think",
        
        description: "The hidden costs of explaining how something works: cross-world counterfactuals and heroic assumptions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Why_Causal_Mechanisms_Are_Harder_Than_You_Think/";
          
        },
      },{id: "post-why-better-models-can-create-stranger-counterfactuals",
        
          title: "Why Better Models Can Create Stranger Counterfactuals",
        
        description: "When AI explanations respect real-world constraints, the &quot;what-ifs&quot; become fewer but more meaningful.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/Why_Better_Models_Can_Create_Stranger_Counterfactuals/";
          
        },
      },{id: "post-what-directed-acyclic-graphs-dags-teach-us-about-choosing-covariates",
        
          title: "What Directed Acyclic Graphs (DAGs) Teach Us About Choosing Covariates",
        
        description: "Why adding more controls can backfire, and how causal graphs help you pick the right ones.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/What_Directed_Acyclic_Graphs_Teach_Us_About_Choosing_Covariates/";
          
        },
      },{id: "post-three-fundamental-conceptual-shifts-in-causal-inference",
        
          title: "Three Fundamental Conceptual Shifts in Causal Inference",
        
        description: "From missing data to survivor bias: three ideas that will reshape how you think about cause and effect.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Three_Conceptual_Shifts_That_Will_Change_How_You_See_Causal_Inference/";
          
        },
      },{id: "post-significance-stars-a-cautionary-tale",
        
          title: "Significance Stars: A Cautionary Tale",
        
        description: "P-values, power, and the three types of significance: a guide to interpreting quantitative evidence.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/Significance_Stars_A_Cautionary_Tale/";
          
        },
      },{id: "post-ddd-estimators-and-distributional-effects",
        
          title: 'DDD Estimators and Distributional Effects <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A discussion of recent developments in Difference-in-Differences (DDD) estimation, focusing on how to account for distributional effects....",
        section: "Posts",
        handler: () => {
          
            window.open("https://diddigest.substack.com/p/ddd-estimators-distributional-effects", "_blank");
          
        },
      },{id: "post-one-sample-to-rule-them-all-the-subtle-power-of-the-bootstrap",
        
          title: "One Sample to Rule Them All? The Subtle Power of the Bootstrap",
        
        description: "How resampling from your own data can reveal an estimator&#39;s uncertainty: the logic and limits of the bootstrap.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/One_Sample_to_Rule_Them_All_The_Subtle_Power_of_the_Bootstrap/";
          
        },
      },{id: "post-multi-armed-bandit-mab-as-an-alternative-to-a-b-testing-a-simulation-using-r",
        
          title: "Multi-Armed Bandit (MAB) as an Alternative to A/B Testing: a Simulation using R...",
        
        description: "Earn while you learn: comparing bandit algorithms that optimize experiments in real time.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/Multi_Armed_Bandit_(MAB)_as_an_Alternative_to_AB_Testing_a_Simulation_Using_R/";
          
        },
      },{id: "post-scraping-the-online-job-posting-data-39-indeed-com-39",
        
          title: "Scraping the Online Job Posting Data: &#39;Indeed.com&#39;",
        
        description: "Collecting 100k+ AI job postings from Indeed using R for labor market research.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Scraping_the_Online_Job_Posting_Data_Indeed_com/";
          
        },
      },{id: "post-collection-of-useful-packages-cheat-sheets-r-and-python-and-tips",
        
          title: "Collection of Useful Packages, Cheat Sheets (R and Python), and Tips",
        
        description: "A curated list of go-to packages and resources for data science workflows.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Collection_of_Useful_Packages,_Cheat_Sheets_(R_and_Python),_and_Tips/";
          
        },
      },{id: "post-hand-rolling-ols-using-r",
        
          title: "Hand-Rolling OLS Using R",
        
        description: "Deriving and coding OLS from scratch to understand what happens under the hood.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/Hand_Rolling_OLS_Using_R/";
          
        },
      },{id: "post-places-to-visit-in-seoul-south-korea",
        
          title: "Places to visit in Seoul, South Korea",
        
        description: "A local&#39;s guide to nightlife, culture, and hidden gems in Korea&#39;s capital.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/Places_to_visit_in_Seoul,_South_Korea/";
          
        },
      },{id: "post-crawling-the-annual-reports-i-e-10-ks-using-r",
        
          title: "Crawling the Annual Reports (i.e., 10-Ks) using R",
        
        description: "Automating SEC filings extraction with R for large-scale text analysis.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2017/Crawling_the_Annual_Reports_(i.e.,_10-Ks)_using_R/";
          
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
