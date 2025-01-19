import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Leaf, Apple, Heart, Brain, Info, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import UserFooter from "@/components/footer/userFooter";
import AIWritingAssistant from "@/components/AI/AIWritingAssistant";

const HealthyTip = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Alert className="mt-4">
      <Info className="h-4 w-4" />
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  </motion.div>
);

const UserHome = () => {
  const [selectedSection, setSelectedSection] = useState("mindful");

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 space-y-4"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
        
        </motion.div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Healthy Food Habits Guide
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Transform your relationship with food through mindful eating and healthy habits
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div variants={container} initial="hidden" animate="show">
          {["mindful", "smart", "habits", "wellness"].map((section, index) => (
            <motion.div
              key={section}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="mb-6"
            >
              <Card 
                className={`p-6 cursor-pointer transition-all hover:shadow-lg ${
                  selectedSection === section ? 'ring-2 ring-blue-500' : ''
                }`}
                onClick={() => setSelectedSection(section)}
              >
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Leaf className="h-6 w-6 text-green-500" />}
                  {index === 1 && <Apple className="h-6 w-6 text-red-500" />}
                  {index === 2 && <Heart className="h-6 w-6 text-pink-500" />}
                  {index === 3 && <Brain className="h-6 w-6 text-purple-500" />}
                  <h2 className="text-xl font-semibold">
                    {section.charAt(0).toUpperCase() + section.slice(1)} Eating
                  </h2>
                </div>

                <motion.img 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  src="https://cdn.pixabay.com/photo/2021/02/02/14/47/man-5974255_1280.png" 
                  alt={`${section} eating`}
                  className="w-full h-80 rounded-lg mb-4 object-cover"
                />

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Key Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <ArrowRight className="h-4 w-4 mt-1 text-blue-500" />
                      <p>{section === "mindful" && "Eat slowly and savor each bite"}
                         {section === "smart" && "Choose whole, unprocessed foods"}
                         {section === "habits" && "Plan your meals ahead"}
                         {section === "wellness" && "Listen to your body's signals"}</p>
                    </motion.li>
                    <motion.li
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-2"
                    >
                      <ArrowRight className="h-4 w-4 mt-1 text-blue-500" />
                      <p>{section === "mindful" && "Practice mindful eating without distractions"}
                         {section === "smart" && "Eat a rainbow of vegetables"}
                         {section === "habits" && "Cook meals at home more often"}
                         {section === "wellness" && "Stay hydrated throughout the day"}</p>
                    </motion.li>
                  </ul>
                </div>

                <HealthyTip>
                  {section === "mindful" && "Take at least 20 minutes to finish your meal"}
                  {section === "smart" && "Eat a rainbow of fruits and vegetables daily"}
                  {section === "habits" && "Plan your meals ahead for better choices"}
                  {section === "wellness" && "Remember, food is nourishment for body and mind"}
                </HealthyTip>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="p-6 sticky top-6">
            <h3 className="text-2xl font-bold mb-6">Daily Wellness Tips</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (index * 0.2) }}
                  className="bg-gray-50 p-4 rounded-lg"
                >
                  <h4 className="font-semibold mb-2">Tip #{index + 1}</h4>
                  <p className="text-gray-600">
                    {index === 0 && "Start your day with a glass of water and fresh fruits"}
                    {index === 1 && "Include colorful vegetables in every meal"}
                    {index === 2 && "Take time to enjoy your meals without rushing"}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
      {/* <UserFooter /> */}
      <AIWritingAssistant />
    </div>
  );
};

export default UserHome;