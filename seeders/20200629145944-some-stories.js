"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          title: "Body of Nobody",
          content:
            "He didn't reply and immediately she thought: they've got him and now they're coming for me. Lorem ipsum dolor sit amet, inani feugait mel an, causae salutatus ad sed, duo noluisse ponderum cu. Cu menandri elaboraret pri, mei signiferumque vituperatoribus ad. No fastidii apeirian erroribus sit, suscipit iudicabit pro ne. Mei unum dicta iusto an. Vim iusto mucius iriure ex, eu has menandri conceptam, brute legere quo at. Ad omnis appetere duo. Doming erroribus pro id, ex vel alienum quaestio.",
          imageUrl:
            "http://literaturef1tof3.weebly.com/uploads/2/8/4/7/28471431/5973721_orig.jpg",
          ratingAverage: 2,
          userId: 1,
          storyLineId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Hollow Lighthouse",
          content:
            "He didn't reply and immediately she thought: they've got him and now they're coming for me. Id eum lorem dicunt intellegam, augue placerat assueverit has ad, ex vim petentium imperdiet. Harum explicari qui id, ei veniam persius definiebas has. Nemore eleifend accommodare pri et, has at rebum modus dictas, legere copiosae tractatos ei quo. Vel ex quod admodum, ut virtute petentium vim. Novum erant ancillae mea at, indoctum temporibus eu per. Vix et salutandi repudiandae, diam intellegebat his ex, has no veritus facilis eleifend.",
          imageUrl:
            "https://i.pinimg.com/originals/f9/7e/06/f97e06b7016460c72c73af470b427169.jpg",
          ratingAverage: 2,
          userId: 2,
          storyLineId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Hissing Holiday",
          content:
            "We were having a nice family dinner, and suddenly someone rang our door. My husbund, Josh, slowly stood up and went to open the door. Ne copiosae neglegentur sea, eos aeque dicant deleniti ei. Vim in reque invidunt, odio instructior et mel, mei ut adhuc eirmod. Cum tale nullam meliore no, virtute facilisis consectetuer an pro, idque recusabo repudiare te per. Ea his postulant euripidis concludaturque, an enim volumus eos. Malis sententiae scriptorem cum no. Putent efficiantur in sit. Discere atomorum sententiae cu sed, sed te ocurreret dignissim. Quo dico mutat legere id, lobortis interpretaris ea eam. Ad tale detraxit laboramus per.",
          imageUrl:
            "https://www.thesmartset.com/wp-content/uploads/2019/12/holiday_FI.jpg",

          userId: 3,
          storyLineId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Angry Slippers",
          content:
            "We were having a nice family dinner, and suddenly someone rang our door. My husbund, Josh, slowly stood up and went to open the door. Liber dignissim mei an, mea iriure interesset ea. Mei at velit causae ocurreret, vim no doming fabulas qualisque. Per ei democritum dissentiet adversarium, ea aperiri forensibus mel, est consul aliquid disputationi no. Sed elit nostro omittam eu, eos ea tota postea animal. Te duo posse falli epicurei, duo ex vero instructior. Dicam prodesset ne eos.",
          imageUrl: "https://unsplash.com/photos/P_0R02ArdLE",

          userId: 1,
          storyLineId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Magnificent Onion",
          content:
            "On this day, 5 years ago, when I was packing my stuff and moving out from my old house. I found an old mysterious box under my bed. I was curious enough to open it. And Reque tamquam mea ad, in phaedrum assueverit pri, per ex illud fugit nostro. Altera consequat has eu, adhuc conclusionemque est ad, everti dissentias quo te. Nibh animal reformidans te quo, ex meliore luptatum singulis nec, sanctus ocurreret id sea. Soleat euripidis consetetur has an. Ea discere delenit vis, sit nostrud probatus adipiscing et, nusquam senserit gloriatur mei te",
          imageUrl:
            "https://www.centreofexcellence.com/app/uploads/2019/07/moon-magic-impact-lunar-cycle-magical-activities-main.jpg",

          userId: 2,
          storyLineId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The Wild Doll",
          content:
            "On this day, 5 years ago, when I was packing my stuff and moving out from my old house. I found an old mysterious box under my bed. I was curious enough to open it. And Natum laudem adversarium sea cu. Justo pericula an his. Cum vidit habeo mazim ea. Cum mutat graecis ad. Ne ius quodsi forensibus sadipscing, vix ferri minim eu, quo nulla perpetua cu. An porro dicta mentitum qui, duo sint graeci percipitur te.",
          imageUrl: "https://posterstore.nl/images/zoom/8-15155.jpg",

          userId: 2,
          storyLineId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
