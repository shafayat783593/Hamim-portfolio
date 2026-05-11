import { FaShieldAlt, FaLightbulb, FaLeaf, FaDraftingCompass, FaBuilding, FaCube } from "react-icons/fa";

export const projectsData = {
  "architectural-plan": {
    title: "Residential Building Design",
    category: "AutoCAD & 3D Visualization",
    location: "Dhaka, Bangladesh",
    date: "Jan 2026",
    description: "A comprehensive architectural plan and 3D exterior design for a 5-story residential building. The project focused on space optimization and advanced ventilation systems.",
    tools: ["AutoCAD", "SketchUp", "V-Ray"],
    whyThisProject: [
      { 
        title: "Structural Safety", 
        desc: "Ensured earthquake-resistant design and structural integrity.", 
        icon: <FaShieldAlt className="text-red-500" /> 
      },
      { 
        title: "Smart Planning", 
        desc: "Maximum room utilization within limited space constraints.", 
        icon: <FaLightbulb className="text-yellow-500" /> 
      }
    ],
    features: ["2D Floor Plan", "3D Exterior View", "Electrical Layout"],
    gallery: ["/project1.jpeg", "/p1-2.jpg"]
  },
  "site-management": {
    title: "Structural Supervision",
    category: "Construction Management",
    location: "Feni, Chittagong",
    date: "Feb 2026",
    description: "Direct supervision and quality control of a commercial site, managing everything from foundation work to the final casting process.",
    tools: ["Site Inspection", "Material Testing", "Labor Management"],
    whyThisProject: [
      { 
        title: "Quality Control", 
        desc: "Precise monitoring of material mixing and reinforcement binding.", 
        icon: <FaShieldAlt className="text-blue-500" /> 
      },
      { 
        title: "Efficiency", 
        desc: "Successfully completed foundation work within the projected timeline.", 
        icon: <FaLeaf className="text-green-500" /> 
      }
    ],
    features: ["Foundation Supervision", "Quality Assurance", "Progress Reporting"],
    gallery: ["/project2.jpeg", "/p2-2.jpg"]
  },
  "interior-modeling": {
    title: "Modern Interior Layout",
    category: "3D Interior Design",
    location: "Chattogram, Bangladesh",
    date: "March 2026",
    description: "Photorealistic 3D interior modeling of a luxury apartment's living room and kitchen using SketchUp and modern rendering engines.",
    tools: ["SketchUp", "Enscape", "Photoshop"],
    whyThisProject: [
      { 
        title: "Lighting Design", 
        desc: "Perfect balance between natural daylight and artificial lighting.", 
        icon: <FaLightbulb className="text-orange-500" /> 
      },
      { 
        title: "Modern Aesthetic", 
        desc: "Minimalistic furniture arrangement and high-end glass fittings.", 
        icon: <FaCube className="text-purple-500" /> 
      }
    ],
    features: ["Realistic Rendering", "Furniture Layout", "Color Palette Selection"],
    gallery: ["/project3.jpeg", "/p3-2.jpg"]
  }
};