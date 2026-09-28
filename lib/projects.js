// All of the site's content. Edit this file directly — it is the source of
// truth, and nothing regenerates it.
//
// The text here started out extracted from the 2026 portfolio decks, so much of
// it is still their exact wording. The extraction tooling has been removed; the
// decks are no longer involved.
//
// Anything reading "TODO" is a placeholder that is visible on the live site,
// left deliberately rather than invented. Replace it with your own wording.
//
// After adding an image or video to public/img, run `npm run media:dims` so it
// gets sized correctly.

export const site = {
  name: "Aimee Liu",
  // Asked for by Aimee, replacing the deck's "Mechatronics and Robotic
  // Controls Engineer".
  role: "Engineering Portfolio",
  // Spelled out rather than as a plain address, to keep it out of reach of
  // email harvesters. Nothing on the site builds a mailto: link from this —
  // a mailto href is the first thing a scraper reads, which would undo it.
  email: "aimee003 [at] mit [dot] edu",
  github: "https://github.com/aimee003",
  // Taken from the LinkedIn hyperlink in Aimee_Liu___Resume_2026.pdf.
  linkedin: "https://linkedin.com/in/liu-aimee",

  blurb: "Welcome to my project portfolio!",
  summary: "I'm Aimee, a MSc student at MIT studying Mechanical Engineering. This is where I keep record of what projects I've worked on.",

  hero: {
    src: "/img/hero-presenting.jpg",
    alt: " ",
    position: "65% center",
  },
};

// TODO: these category names are not in the deck — they are a grouping added
// to give the site its navigation. Rename or remove any that are wrong.
export const categories = [
  { slug: "robotics", name: "Robotics & Controls" },
  { slug: "electronics", name: "Electronics" },
  { slug: "mechanical-design", name: "Mechanical Design" },
  { slug: "user-centered", name: "User-Centered Design" },
];

export const projects = [
  {
    slug: "tactile-sensors",
    title: "Tactile Sensors for 3-Fingered Robot Hand",
    objective: "Develop a tactile sensor that samples at 200Hz for a 3-fingered robotic hand to complete dexterous manipulation tasks.",
    overview: "I developed and trained over a dozen sensors for a collaborative project between the Biomimetic Robotics Lab and RAILAB. These sensors samples contact flag, force (normal and shear), and contact position for dexterous manipulation tasks. I program the firmware to sample the sensors and output to the CAN at 200Hz. I performed various limit tests to ensure the tactile sensors do not break under normal use, as these sensors are to be used on a hand rated to carry upwards of 18 kg. I additionally made a cap for the sensor to prevent further degradation of the elastomer. I simulate these sensors in MuJoCo to train RL policies for dexterous manipulation tasks.",
    skills: [
    ],
    period: "April 2026 - Present",
    year: 2026,
    categories: ["robotics", "electronics"],
    links: [
    ],
    rowHeights: { 1: "min(44vh, 370px, max(26vw, 200px))" },
    cover: "/img/tactile-sensors-1.jpg",
    media: [
      {
        src: "/img/tactile-sensors-3.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/tactile-sensors-1.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/tactile-sensors-2.jpg",
        alt: " ",
        row: 1,
      },
      {
        type: "video",
        src: "/img/tactile-sensors-6.mp4",
        poster: "/img/tactile-sensors-6-poster.jpg",
        alt: " ",
        row: 2,
      },
    ],
  },
  {
    slug: "robotic-wrist",
    title: "High-Payload Robotic Wrist Mechanism",
    objective: "Develop a wrist mechanism that withstand handling upwards of 18kg.",
    overview: "I develop a wrist mechanism in the Biomimetic Robotics lab in collaboration with RAILAB in South Korea which can withstand the maximum torque and force the part may experience in normal and extreme use. I developed the wrist, forearm, and carpals, which connect the wrist actuators to the arm and hand. The parts had to go through rigorous FEA testing and prototyping before approval. I made the drawings for manufacturing based on ISO standards and assembled the wrist mechanism. The mechanism can withstand normal use with a safety factor of 5.",
    skills: [
    ],
    period: "Sept 2025 - May 2026",
    year: 2026,
    categories: ["robotics", "mechanical-design"],
    links: [
    ],
    rowHeights: { 1: "min(66vh, 594px, max(42vw, 320px))", 2: "min(66vh, 594px, max(42vw, 320px))" },
    cover: "/img/robotic-wrist-11.png",
    media: [
      {
        src: "/img/robotic-wrist-8.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/robotic-wrist-9.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/robotic-wrist-10.png",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/robotic-wrist-2.jpg",
        alt: " ",
        row: 2,
      },
    ],
  },
  {
    slug: "fall-risk",
    title: "Characterizing Fall Risk with Control Models",
    objective: "Simulate a human body performing a one-legged stand test using an LQR controller to determine fall risk.",
    overview: "For this project, my team and I simulate a one-legged stand test using a double-inverted pendulum model to determine the fall risk of people of different age and risk groups. I programmed the DIP model simulation in MATLAB to take in patient information and simulate a one-legged test stand performance using an LQR controller which keeps the model upright.",
    skills: [
    ],
    period: "Feb 2026 - May 2026",
    year: 2026,
    categories: ["robotics"],
    links: [
    ],
    rowHeights: { 1: "min(50vh, 440px, max(31vw, 240px))", 2: "min(46vh, 400px, max(28vw, 230px))" },
    cover: "/img/fall-risk-6.png",
    media: [
      {
        src: "/img/fall-risk-3.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/fall-risk-7.png",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/fall-risk-5.png",
        alt: " ",
        row: 2,
      },
      {
        type: "video",
        src: "/img/fall-risk-4.mp4",
        poster: "/img/fall-risk-4-poster.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/fall-risk-8.png",
        alt: " ",
        row: 3,
      },
    ],
  },
  {
    slug: "slider-rl",
    title: "Imperial College London's SLIDER Robot",
    objective: "Simulate Imperial College London’s SLIDER, a kneeless bipedal robot, on IsaacGym and Genesis for sim-to-sim transfer.",
    overview: "I worked with the SLIDER robot at Imperial College London's Robot Intelligence (ROBIN) Lab, a bipedal, knee-less robot capable of locomotion. In order to verify the feasibility of SLIDER’s motion, we needed to implement a sim-to-sim program to validate the locomotion learned from reinforcement learning in both IsaacGym and Genesis. I used LeggedGym and HumanoidVerse to simulate SLIDER standing in place and walking forward using RL in IsaacGym and tested the learned behavior in Genesis.",
    skills: [
      "Implemented a non-humanoid model in IsaacGym and Genesis with URDF files",
      "Simulated and tested movement using reinforcement learning in Python",
    ],
    period: "June 2025 - Aug 2025",
    year: 2025,
    categories: ["robotics"],
    links: [
      { label: "Imperial College London's SLIDER Robot", href: "https://www.imperial.ac.uk/robot-intelligence/robots/slider/" },
    ],
    cover: "/img/slider-rl-2.jpg",
    media: [
      {
        src: "/img/slider-rl-2.jpg",
        alt: " ",
      },
      {
        src: "/img/slider-rl-1.jpg",
        alt: " ",
      },
    ],
  },
  {
    slug: "ur5-bottle-collector",
    title: "UR5 Bottle Collector",
    objective: "Design an end effector and program a UR5 robot arm to collect bottles from a moving conveyor and place them in the correct bin",
    overview: "Our team developed a robotic arm to detect and collect bottles on a moving conveyor belt and sort them based on color. We designed various grippers, including a suction cup gripper, and developed a program for our UR5 robotic arm to automatically detect, pick-up, and throw a moving bottle into the correct bin for it’s determined color based on our color detection system and depth sensor from our camera. I built and programmed a remote controller to connect with and remotely control the UR5 robot arm and designed an automatic pick-and-throw procedure for the robot arm to throw bottles into the correct bin based on information from its RGB-D camera. We successfully detected and correctly placed orange, yellow, blue and clear bottles and competed in a competition to place the most bottles correctly within 7 minutes.",
    skills: [
      "Built and programmed a remote controller to connect with and remotely control the UR5 robot arm with joysticks and buttons using Python and C++",
      "Designed pick-and-throw trajectory for the robot arm to throw bottles into the correct bin with Python",
      "Designed automatic trajectory calculation and procedure to initiate a bottle grasp and throw",
      "Developed safety controls to prevent the robot from moving out of bounds or too quickly",
      "Assisted in programming bottle color detection system using OpenCV",
      "Debugged depth sensor camera for bottle detection",
    ],
    period: "Feb 2025 - May 2025",
    year: 2025,
    categories: ["robotics"],
    links: [
    ],
    cover: "/img/ur5-bottle-6.jpg",
    media: [
      {
        src: "/img/ur5-bottle-7.jpg",
        alt: " ",
        row: 1,
      },
      {
        type: "video",
        src: "/img/ur5-bottle-3.mp4",
        poster: "/img/ur5-bottle-3-poster.jpg",
        alt: " ",
        displayWidth: 620,
        row: 2,
      },
      {
        src: "/img/ur5-bottle-6.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/ur5-bottle-5.jpg",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/ur5-bottle-1.png",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/ur5-bottle-2.png",
        alt: " ",
        row: 4,
      },
    ],
  },
  {
    slug: "co-monitor-firefighter-mask",
    title: "CO Monitor Firefighter Mask",
    objective: "Design an attachment for a firefighting mask that is capable of detecting dangerous levels of carbon monoxide",
    overview: "To prevent death and long-term health effects due to carbon monoxide poisoning, my medical device design team created an extension to a firefighter SCBA mask in order to detect and alert firefighters of high carbon monoxide (CO) presence inside and outside the mask. We worked with firefighters of the Cambridge Fire Department to for feedback and usage of their available masks and CO monitors. My team and I designed and assembled a PCB and developed the firmware for CO detection for our mask attachment. We then conducted experiments to verify the functionality of our device in detecting carbon monoxide.",
    skills: [
      "Designed and drew models/diagrams for mask attachment",
      "Programmed firmware for CO detector using Arduino",
      "Developed PCB designs using KICAD",
      "Fabricated breakout board PCBs for testing components using a PCB mill",
      "Assembled and soldered PCBs and worked with mechanical design team to fit PCB in attachment",
      "Conducted experiments to verify the functionality of our device in detecting carbon monoxide",
    ],
    period: "Feb 2025 - May 2025",
    year: 2025,
    categories: ["electronics", "user-centered"],
    links: [
    ],
    rowHeights: { 1: "min(56vh, 480px, max(34vw, 300px))", 2: "min(52vh, 440px, max(31vw, 240px))", 3: "min(35vh, 300px, max(34vw, 220px))" },
    cover: "/img/co-monitor-mask-4.jpg",
    media: [
      {
        src: "/img/co-monitor-mask-4.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/co-monitor-mask-3.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/co-monitor-mask-1.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/co-monitor-mask-2.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/co-monitor-mask-7.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/co-monitor-mask-5.jpg",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/co-monitor-mask-6.jpg",
        alt: " ",
        row: 3,
      },
    ],
  },
  {
    slug: "fishingbot",
    title: "FishingBot",
    objective: "Develop a robotic gripper program to identify, track, and catch fish",
    overview: "In order to support sustainable aquaculture practices, my team developed a robotic gripper using the KUKA IIWA arm simulated and verified in Drake to catch various types of fish moving at different velocities. The robot identifies the fish, calculates the fish trajectory, calculates a pick-and-place motion plan for the robotic arm, and execute the motion with an Inverse Kinematics controller. The resulting robotic system is capable of harvesting fish swimming under 5.1 m/s with 91.4% accuracy, and can catch fish with speeds upwards of 7.7 m/s. I modeled the simulation of the KUKA IIWA arm in DRAKE, designed the pick-and-place trajectory, and built a pseudo-inverse and PID inverse kinematics controller for the robot.",
    skills: [
      "Modeled simulation of KUKA IIWA arm and environment in DRAKE with Python",
      "Designed pick-and-place trajectory of robotic arm",
      "Built the Pseudo-Inverse and PID Inverse Kinematics controller for the robotic arm and compared performance",
      "Collected data of robotic grasping simulations and evaluated robot",
      "Debugged and assisted design of the perception system and fish tracking capabilities",
    ],
    period: "Sept 2024 - Dec 2024",
    year: 2024,
    categories: ["robotics"],
    links: [
      { label: "Report", href: "https://drive.google.com/file/d/1XEuXINDL8jyBE4gtabEvvZZ1lsNITLvx/view?usp=sharing" },
      { label: "Video", href: "https://www.youtube.com/watch?v=Oqdf_uGZ8Lo" },
    ],
    rowHeights: { 1: "min(40vh, 360px, max(26vw, 220px))", 2: "min(36vh, 320px, max(22vw, 200px))" },
    cover: "/img/fishingbot-5.png",
    media: [
      {
        src: "/img/fishingbot-5.png",
        alt: " ",
        row: 1,
      },
      {
        type: "video",
        src: "/img/fishingbot-6.mp4",
        poster: "/img/fishingbot-6-poster.jpg",
        alt: " ",
        row: 1,
      },
      {
        type: "video",
        src: "/img/fishingbot-8.mp4",
        poster: "/img/fishingbot-8-poster.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/fishingbot-7.png",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/fishingbot-1.png",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/fishingbot-2.png",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/fishingbot-3.png",
        alt: " ",
        row: 5,
      },
    ],
  },
  {
    slug: "psyonic-ability-hand",
    title: "PSYONIC Ability Hand",
    objective: "Program the PSYONIC Ability Hand to type on a keyboard and play piano",
    overview: "During my mechatronics internship at PSYONIC Inc., I helped develop mechanical components for testing components of the Ability Hand and programmed controls systems for demos. I developed a program to calibrate and type on a keyboard, and map out a piano keyboard to find and play notes. I helped develop controls for the robot arm and hand integration and made a data graphing program to plot the robot’s current and desired position.",
    skills: [
      "Developed controls for the robot arm in Python and C++ with ROS through Linux operating system",
      "Implemented PID control system",
      "Implemented data graphing program to plot current and desired position in Python",
    ],
    period: "June 2024 - Aug 2024",
    year: 2024,
    categories: ["robotics"],
    links: [
    ],
    rowHeights: { 1: "min(62vh, 560px, max(38vw, 300px))", 2: "min(44vh, 400px, max(28vw, 240px))" },
    cover: "/img/ability-hand-6.jpg",
    media: [
      {
        src: "/img/ability-hand-6.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/ability-hand-5.jpg",
        alt: " ",
        row: 2,
      },
    ],
  },
  {
    slug: "autonomous-robot-car",
    title: "Autonomous Robot Car",
    objective: "Program and control an autonomous robot car to compete in a racing and navigation competition",
    overview: "My team and I programmed an unprogrammed miniature robotic car using ROS2, enabling it to navigate its surroundings with SLAM, path planning, and more. The competition required the car to autonomously race on a track while staying in its lane, and to navigate a mock city course while obeying traffic laws (stop signs and traffic lights) and reaching four checkpoints. I developed wall- and line-following with PID control, computer vision algorithms for lane and traffic signal detection using color segmentation and homography, SLAM-based localization, and A* path planning. I also implemented a safety controller to prevent collisions and debugged and tested controls on hardware. Our car finished the race in 1:06 and reached all four checkpoints in the navigation challenge.",
    skills: [
      "Developed wall/line-following with PID controls, visualization with color segmentation and homography, SLAM localization, and path-finding with A* through Python, C++ and ROS2",
      "Implemented a safety controller to prevent crashes",
      "Utilized distributed version control with GitHub",
      "Debugged and tested controls in hardware",
    ],
    period: "Feb 2024 - May 2024",
    year: 2024,
    categories: ["robotics"],
    links: [
      { label: "MIT's Robotics Science and System's Class", href: "https://meche.mit.edu/featured-classes/robotics-science-and-systems" },
      { label: "Team Website", href: "https://rss2024-6.github.io/website/index.html" },
    ],
    rowHeights: { 1: "min(38vh, 330px, max(24vw, 210px))", 2: "min(36vh, 310px, max(22vw, 200px))", 3: "min(40vh, 335px, max(26vw, 220px))", 4: "min(42vh, 360px, max(25vw, 200px))" },
    cover: "/img/autonomous-car-10.jpg",
    media: [
      {
        src: "/img/autonomous-car-10.jpg",
        alt: " ",
        row: 1,
      },
      {
        type: "video",
        src: "/img/autonomous-car-9.mp4",
        poster: "/img/autonomous-car-9-poster.jpg",
        alt: " ",
        row: 1,
      },
      {
        type: "video",
        src: "/img/autonomous-car-2.mp4",
        poster: "/img/autonomous-car-2-poster.jpg",
        alt: " ",
        row: 2,
      },
      {
        type: "video",
        src: "/img/autonomous-car-8.mp4",
        poster: "/img/autonomous-car-8-poster.jpg",
        alt: " ",
        row: 2,
      },
      {
        type: "video",
        src: "/img/autonomous-car-4.mp4",
        poster: "/img/autonomous-car-4-poster.jpg",
        alt: " ",
        row: 3,
      },
      {
        type: "video",
        src: "/img/autonomous-car-5.mp4",
        poster: "/img/autonomous-car-5-poster.jpg",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/autonomous-car-1.png",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/autonomous-car-7.png",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/autonomous-car-6.jpg",
        alt: " ",
        row: 4,
      },
      {
        type: "video",
        src: "/img/autonomous-car-3.mp4",
        poster: "/img/autonomous-car-3-poster.jpg",
        alt: " ",
        row: 5,
      },
    ],
  },
  {
    slug: "rf-walkie-talkie",
    title: "Analog Miniature RF Walkie-Talkie",
    objective: "Design and develop a portable, miniature RF transmitter and receiver with analog components",
    overview: "For our analog electronics project, my team designed a low-powered miniature transmitter and receiver tuned to a 14-14.3 MHz bandwidth that can operate on a 9V battery using only analog components deadbugged together.\nThe transmitter is capable of transmitting voice signals that can be picked up by commercial, high-powered receivers and provides intelligible voices. The receiver and transmitter must be close to work together but can return general intonations of voices through the receiver. I designed and built the BJT modulator, envelope detector, and RF filter/amplifiers and did (a painful amount of) debugging with benchtop tools.",
    skills: [
      "Designed a BJT modulator, envelope detector, and RF filter/amplifiers with through LTSpice",
      "Debugged and tested components using oscilloscopes, function generators, multimeters, and LCR meters",
    ],
    period: "Feb 2024 - May 2024",
    year: 2024,
    categories: ["electronics"],
    links: [
      { label: "Report", href: "https://drive.google.com/file/d/1HMZ2rIX_E752RrLF-4qdw7R-LgJfVb9d/view?usp=sharing" },
    ],
    rowHeights: { 1: "min(56vh, 480px, max(34vw, 300px))", 2: "min(32vh, 274px, max(19vw, 180px))", 3: "min(34vh, 288px, max(20vw, 180px))", 4: "min(50vh, 430px, max(30vw, 260px))", 5: "min(42vh, 370px, max(26vw, 220px))" },
    cover: "/img/rf-walkie-talkie-6.jpg",
    media: [
      {
        src: "/img/rf-walkie-talkie-2.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/rf-walkie-talkie-3.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/rf-walkie-talkie-8.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/rf-walkie-talkie-7.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/rf-walkie-talkie-12.png",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/rf-walkie-talkie-11.png",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/rf-walkie-talkie-9.png",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/rf-walkie-talkie-6.jpg",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/rf-walkie-talkie-10.jpg",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/rf-walkie-talkie-5.png",
        alt: " ",
        row: 5,
      },
      {
        src: "/img/rf-walkie-talkie-13.png",
        alt: " ",
        row: 5,
      },
      {
        src: "/img/rf-walkie-talkie-4.png",
        alt: " ",
        row: 6,
      },
    ],
  },
  {
    slug: "one-handed-game-controller",
    title: "One-Handed Game Controller",
    objective: "Design and build a one-handed game controller for our codesigner",
    overview: "I led a team aimed to create a one-handed game-controller for our codesigner Susan Bibbins, who suffers from partial paralysis. I developed and 3D-printed prototypes for the game controller case, made the schematic for the electronics within the controller, programmed the firmware, and iterated based on feedback from our codesigner. I taught other members CAD, 3D printing, soldering, and other various other skills to make the develop an ergonomic controller for Susan. The project is now open-source for other people with disabilities to make themselves!",
    skills: [
      "CAD and 3D printing with SOLIDWORKS and Fusion360",
      "Prototyped and iterated controller design based on user feedback to focus on comfort and feasibility",
      "Led hardware, electronic, and software design for the controller",
    ],
    period: "Sept 2023 - May 2024",
    year: 2024,
    categories: ["user-centered", "mechanical-design"],
    links: [
      { label: "MIT Assistive Technology Club", href: "https://edgerton.mit.edu/assistive-technology-club" },
      { label: "GitHub Repo", href: "https://github.com/vaeyias/one-handed-game-controller" },
    ],
    rowHeights: { 1: "min(56vh, 480px, max(34vw, 300px))", 2: "min(56vh, 480px, max(34vw, 300px))", 3: "min(36vh, 315px, max(22vw, 200px))" },
    cover: "/img/game-controller-1.jpg",
    media: [
      {
        src: "/img/game-controller-5.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/game-controller-1.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/game-controller-8.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/game-controller-9.jpg",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/game-controller-2.png",
        alt: " ",
        row: 2,
      },
      {
        src: "/img/game-controller-4.jpg",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/game-controller-3.jpg",
        alt: " ",
        row: 3,
      },
    ],
  },
  {
    slug: "bio-inspired-leaping-robot",
    title: "Bio-Inspired Leaping Robot",
    objective: "Design, build, and test a one-legged leaping robot to determine the effect of arm swing on jump distance.",
    overview: "Based on an athlete’s standing long jump, my bio-inspired robotics team created a one-legged leaping robot to analyze arm swing delay on jumping distance. This consists of both simulation and real-life experimentation by simulating the robot and its physics in MATLAB and developing a hardware robot to test our results. I analyzed human examples of the standing long jump to develop our trajectory controls, programmed the robotic leg in simulation using MATLAB, and developed a program to plot the range of motion and intended Bezier curve trajectory. We found that there exists a peak timing in which an arm swing generates the most distance at around -0.06 seconds from the jump timing, which is consistent with simulation, experimentation, and real-life examples.",
    skills: [
      "Programmed robotic leg in simulation using MATLAB",
      "Researched and analyzed human examples",
      "Developed MATLAB program to plot range of motion and intended Bezier curve trajectory",
      "Plot and analyzed simulation data results",
      "Developed controls and embedded systems with C++ for leg trajectory",
      "Assisted in hardware design and prototyping",
    ],
    period: "Sept 2023 - Dec 2023",
    year: 2023,
    categories: ["robotics", "mechanical-design"],
    links: [
      { label: "MIT's Bio-inspired Robotics Class", href: "https://meche.mit.edu/news-media/bio-inspired-robotics" },
      { label: "Team's Presentation", href: "https://docs.google.com/presentation/d/1pwrNYrQaui3wEZA-Eyeq30geNuRZ_VhqaM5_PW0XORg/edit#slide=id.p" },
    ],
    rowHeights: { 1: "min(46vh, 400px, max(28vw, 240px))", 3: "min(64vh, 560px, max(40vw, 300px))", 4: "min(40vh, 340px, max(24vw, 220px))" },
    cover: "/img/leaping-robot-6.jpg",
    media: [
      {
        type: "video",
        src: "/img/leaping-robot-3.mp4",
        poster: "/img/leaping-robot-3-poster.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/leaping-robot-6.jpg",
        alt: " ",
        row: 1,
      },
      {
        src: "/img/leaping-robot-5.jpg",
        alt: " ",
        row: 2,
      },
      {
        type: "video",
        src: "/img/leaping-robot-7.mp4",
        poster: "/img/leaping-robot-7-poster.jpg",
        alt: " ",
        row: 3,
      },
      {
        type: "video",
        src: "/img/leaping-robot-2.mp4",
        poster: "/img/leaping-robot-2-poster.jpg",
        alt: " ",
        row: 3,
      },
      {
        src: "/img/leaping-robot-1.png",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/leaping-robot-8.jpg",
        alt: " ",
        row: 4,
      },
      {
        src: "/img/leaping-robot-4.png",
        alt: " ",
        row: 5,
      },
    ],
  },
  {
    slug: "neural-implants",
    title: "Characterization Flexible Neural Implants",
    objective: "Analyze properties of flexible neural probes through an accelerated aging test.",
    overview: "In this internship at Forschungszentrum Jülich in Germany, I performed an accelerated aging test (AAT) on the flexible neural probes developed by FZJ to analyze the effects of different development procedures in long term in-vivo applications. I tested the electrochemical degradation of the probes by performing Electrical Impedance Spectroscopy (EIS) and Cyclic Voltammetry (CV) tests every 3-4 days and analyzed my findings.",
    skills: [
    ],
    period: "June 2023 - Aug 2023",
    year: 2023,
    categories: ["electronics"],
    links: [
    ],
    cover: "/img/neural-implants-3.jpg",
    media: [
      {
        src: "/img/neural-implants-3.jpg",
        alt: " ",
      },
    ],
  },
  {
    slug: "motor-test-stand",
    title: "Height Adjustable Motor Test Stand",
    objective: "Build a safe, adjustable mechanism to hold and stabilize Rocket Team’s motors during static fires.",
    overview: "The Rocket Team needed to modify our test stand setup for improved safety. I designed and assembled a height adjustable test stand to be used by different sized motors and kept stationary with safety measures such as adjustable side bolts and a swappable top.This was reviewed by MIT professors and later used and tested in future static fires.",
    skills: [
      "CAD assembly with SOLIDWORKS",
      "FEA Testing with SOLIDWORKS",
      "Assembly with previous and machined parts",
    ],
    period: "July 2022 - Oct 2022",
    year: 2022,
    categories: ["mechanical-design"],
    links: [
      { label: "MIT Rocket Team", href: "https://rocketry.mit.edu/home" },
    ],
    cover: "/img/motor-test-stand-1.jpg",
    media: [
      {
        src: "/img/motor-test-stand-1.jpg",
        alt: " ",
      },
      {
        src: "/img/motor-test-stand-2.jpg",
        alt: " ",
      },
      {
        src: "/img/motor-test-stand-3.jpg",
        alt: " ",
      },
      {
        src: "/img/motor-test-stand-4.jpg",
        alt: " ",
      },
    ],
  },
  {
    slug: "magnetomicrometry",
    title: "Magnetomicrometry Array Calibration",
    objective: "Develop a program to calibrate magnetic sensor arrays for magnetomicrometry.",
    overview: "In MIT Media Lab’s Biomechatronics Group, I worked under Dr. Cameron Roy Taylor to develop a calibration algorithm for the magnetic sensor arrays used for Magnetomicrometry: a method of using magnetic bead implants in the muscles to track movement. I made a program to determine the change in orientation and translation of data collected by the magnetic sensor arrays. This method is included in a paper accepted in Nature Sensors.",
    skills: [
    ],
    period: "July 2022 - Oct 2022",
    year: 2022,
    categories: ["electronics"],
    links: [
    ],
    cover: "/img/magnetomicrometry-2.jpg",
    media: [
      {
        src: "/img/magnetomicrometry-2.jpg",
        alt: " ",
      },
      {
        src: "/img/magnetomicrometry-1.jpg",
        alt: " ",
      },
    ],
  },
];

// Shown on the home page, in this order. Everything else stays on /projects.
export const featured = ["tactile-sensors", "robotic-wrist", "psyonic-ability-hand", "bio-inspired-leaping-robot"].map((s) =>
  projects.find((p) => p.slug === s)
).filter(Boolean);

export const getProject = (slug) => projects.find((p) => p.slug === slug);

export const getCategory = (slug) => categories.find((c) => c.slug === slug);

export const projectsIn = (categorySlug) =>
  projects.filter((p) => p.categories.includes(categorySlug));
