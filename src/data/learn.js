const rows = [
  // 1. Gardening
  ["1.1", "Gardening for Beginners Series: Gardening Basics for Beginners", "Gardening", "BO8yuSTc3fo", "0:11:00"],
  ["1.2", "IMPORTANT GARDENING TIPS FOR BEGINNERS", "Gardening", "Wb69MJ0rNBI", "0:04:35"],
  ["1.3", "How to Start Your First Garden (COMPLETE GUIDE)", "Gardening", "X3SP1Fub3bw", "0:22:46"],
  ["1.4", "How to start gardening Choose right plants for your house", "Gardening", "Tmz8PPMF6dY", "0:09:47"],
  ["1.5", "Tips your Maali or Professional Gardeners won't tell you!", "Gardening", "yvVft_ZofK8", "0:09:52"],
  ["1.6", "Vegetable Gardening for Beginners", "Gardening", "LAU6qu_dKBk", "0:09:42"],
  ["1.7", "How to garden - what every beginner gardener needs to know....", "Gardening", "tdcGgD1kQFM", "0:14:35", 449],

  // 3. Plant Knowledge
  ["3.1", "Botany Basics | How to Identify Different Plant Species Around You", "Plant Knowledge", "Dpn3gGBIOAw", "0:31:48"],
  ["3.2", "Beginner Plant Identification and Management", "Plant Knowledge", "-XwyLVqKRRQ", "0:59:10"],
  ["3.3", "HOUSEPLANT CARE TIPS FOR BEGINNERS » + printable guide", "Plant Knowledge", "LZhnCxG5c6s", "0:08:25"],
  ["3.4", "Houseplant 101 | Houseplant Care Basics", "Plant Knowledge", "1dOoRwvO3qY", "0:22:29"],
  ["3.5", "The Surprising Map of Plants", "Plant Knowledge", "ONVpFtiD-fo", "0:19:54"],
  ["3.6", "Plant Nutrition 101: All Plant Nutrients and Deficiencies Explained", "Plant Knowledge", "QALxEt6OFpc", "0:16:42"],
  ["3.7", "Botany in a Day Tutorial (46 mins) The Patterns Method of Plant Identification", "Plant Knowledge", "D1DePlU15z4", "0:46:03"],

  // 9. Indoor Gardening
  ["9.1", "Growing Food Indoors - The Ultimate Guide", "Indoor Gardening", "kw1LRqWQoQc", "0:17:08"],
  ["9.2", "Hydroponics 101 | A BEGINNERS GUIDE TO EVERYTHING YOU NEED AND NEED TO KNOW TO GROW PLANTS IN WATER.", "Indoor Gardening", "0EklopLQqyk", "0:10:57"],
  ["9.3", "HOW TO START APARTMENT INDOOR GARDEN ZERO WASTE STYLE | Growing own Veggies from Scraps.", "Indoor Gardening", "g7RFt7kmNlM", "0:07:36"],
  ["9.4", "Indoor Gardening Setup for Beginners 🌱 | Starting An Indoor Herb & Vegetable Garden", "Indoor Gardening", "hcgylx16Q3w", "0:22:10"],
  ["9.5", "An Expert's Guide To Indoor Windowsill Gardening / Grow Fresh Veggies And Herbs All Year Round!", "Indoor Gardening", "mzBNaaSiA6A", "0:12:21"],
  ["9.6", "INDOOR PLANTS-COMPLETE CARE GUIDE AND TIPS / GIVEAWAY CONTEST इंडोर प्लांट", "Indoor Gardening", "K5iIhI4QwXY", "0:24:48"],
  ["9.7", "How to prepare soil mix for Indoor plants | Ep.6 Garden Up Basics", "Indoor Gardening", "ofWJN4Tw7bo", "0:06:05"],

  // 10. Monthly Gardening
  ["10.1", "Gardening Masterclass: Use my Month-by-Month Guide", "Monthly Gardening", "e38W9qySwGE", "0:09:00"],
  ["10.2", "8 Crops You Should Plant in October ASAP", "Monthly Gardening", "mkA-AAJRIcM", "0:28:38"],
  ["10.3", "Zone 9 Gardening Calendar: What to Plant Each Month for a Thriving Garden", "Monthly Gardening", "6AE8oUj48ns", "0:09:02"],
  ["10.4", "Planting with the Seasons: A Month-by-Month Guide to Vegetable Sowing Date", "Monthly Gardening", "1HtBMfbJ_nY", "0:21:31"],
  ["10.5", "Crops You Can Grow Through the Winter", "Monthly Gardening", "hi9mM7BkKco", "0:16:35"],
  ["10.6", "The Lazy Gardener's Best Vegetables to Grow in 2026", "Monthly Gardening", "GmN4WzYHNWI", "0:14:10"],
  ["10.7", "Ultimate 12 Month Vegetable Calendar for Indian Gardens", "Monthly Gardening", "YwJFimQHBIw", "0:31:54"],

  // 12. Lawn Mowing
  ["12.1", "How to Mow a Lawn CORRECTLY", "Lawn Mowing", "P6lwyRmOk30", "0:03:35", 11],
  ["12.2", "How to MOW, TRIM, EDGE and Blow your grass", "Lawn Mowing", "251pK-mCLww", "0:08:55"],
  ["12.3", "8 Beginner Friendly Lawn Care Tips For Any Lawn", "Lawn Mowing", "P1xwBxqQloY", "0:10:53"],
  ["12.4", "HOW TO START A LAWN MOWER | Life Skills", "Lawn Mowing", "Rb4abcfLuzc", "0:02:00"],
  ["12.5", "How to Mow a Lawn Like a Pro (Best Tips & Techniques)", "Lawn Mowing", "VMLIXeXAZuA", "0:11:07", 51],
  ["12.6", "Lawn Care 101: How to Weed, Seed, Feed, Mow, & Water", "Lawn Mowing", "D_s4fjbC6a4", "0:04:26"],
  ["12.7", "How to FIX an UGLY Lawn with RESULTS - Step by Step for Beginners EASY", "Lawn Mowing", "c54WSOI-MMc", "0:11:10"],

  // 13. Tree Cutting
  ["13.1", "BEGINNER GUIDE TO CUTTING A TREE", "Tree Cutting", "3mTd8ZTG_cc", "0:10:32"],
  ["13.2", "How To Cut Down A Tree", "Tree Cutting", "Os2vrOT8F1Q", "0:03:37"],
  ["13.3", "How to Prune Trees", "Tree Cutting", "q1IHqAZxLrc", "0:05:25"],
  ["13.4", "HOW TO AIM A TREE | Tree Felling Tutorial", "Tree Cutting", "PTUreUjGBsw", "0:03:31"],
  ["13.5", "WORLD'S BEST TREE FELLING TUTORIAL! Way more information than you ever wanted on how to fell a tree!", "Tree Cutting", "nLIEYvHMS8U", "0:45:25"],
  ["13.6", "tree cutting skills in anticipation of a falling tree disaster", "Tree Cutting", "na5RZV7c5Jo", "0:25:17"],
  ["13.7", "Timber Falling Technique How to Wedge Small Trees", "Tree Cutting", "pZU1UAeKAXM", "0:07:48"],
];

export const videos = rows.map(([sn, title, type, id, duration, start = 0]) => ({
  sn,
  title,
  type,
  id,
  duration,
  start,
}));

export const categories = [...new Set(videos.map((v) => v.type))];

export const formatDuration = (d) => d.replace(/^0:/, "");

export const thumbnailUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const embedUrl = (id, start = 0) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0${start ? `&start=${start}` : ""}`;