
import '../styleSheets/app2.css';
import React, { useState } from "react";



const workouts = [
  {
    day: "Day 1: Upper Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/87537cc5-979c-408b-b665-0b8e32786e27/e3ebb85f-d0f4-4e90-9cb0-5e3ce672b246.png",
    exercises: [
      "Push-ups: 3 sets of 12 reps",
      "Pull-ups: 3 sets of 8 reps",
      "Dumbbell Bench Press: 3 sets of 10 reps",
      "Tricep Dips: 3 sets of 12 reps",
    ],
    mealPlan: [
      "Meal 1: Scrambled Eggs with Avocado",
      "Meal 2: Grilled Chicken Salad",
      "Meal 3: Salmon with Roasted Veggies",
    ],
  },
  {
    day: "Day 2: Lower Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f0675f8f-af26-4a7b-b578-7f3305e74df2/495ce76b-2474-49e4-b059-d113c97ca745.png",
    exercises: [
      "Squats: 3 sets of 12 reps",
      "Lunges: 3 sets of 10 reps per leg",
      "Deadlifts: 3 sets of 8 reps",
      "Calf Raises: 3 sets of 15 reps",
    ],
    mealPlan: [
      "Meal 1: Oatmeal with Berries",
      "Meal 2: Grilled Chicken with Quinoa",
      "Meal 3: Beef Stir-Fry with Veggies",
    ],
  },
  {
    day: "Day 3: Cardio and Core",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/b71c65fe-2026-4aa9-902a-496eea94b71b/69657e97-710b-48a3-b38f-8dfb4184c3b1.png",
    exercises: [
      "Jump Rope: 5 minutes",
      "Plank: 3 sets of 1 minute",
      "Bicycle Crunches: 3 sets of 15 reps per side",
      "Mountain Climbers: 3 sets of 20 reps",
    ],
    mealPlan: [
      "Meal 1: Protein Shake",
      "Meal 2: Tuna Salad",
      "Meal 3: Chicken Wrap",
    ],
  },
  {
    day: "Day 4: Active Recovery",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4b0e8a31-34e8-4482-97f6-1d9d1302d6a9/c949698f-1b44-4c05-91c0-a8f985316f08.png",
    exercises: ["Yoga or Stretching: 20-30 minutes", "Light Walking: 15 minutes"],
    mealPlan: ["Meal1: Avocado Toast with Egg",
               "Meal 2: Chicken Caesar Salad",
               "Meal 3: Grilled Fish with Sweet Potato"],
  },
  {
    day: "Day 5: Full Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f3baa468-92de-404d-80c6-82c3c68525af/e1742ea2-494c-497f-836d-974504dcc183.png",
    exercises: ["Burpees: 3 sets of 10 reps", "Deadlifts: 3 sets of 8 reps", "Push-ups: 3 sets of 12 reps", "Plank Rows: 3 sets of 10 reps per side"],
    mealPlan: ["Meal 1:Smoothie with Spinach and Banana",
               "Meal 2: Veggie Stir Fry with Rice",
               "Meal 3:Quinoa Bowl with Tofu"],
  },
  {
    day: "Day 6: Endurance Training",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/703d82cb-84ba-4767-aad8-4c88ef2d25f0/f9c7beb8-5a3a-4ca6-acfc-1f845297ea78.png",
    exercises: ["Running or Cycling: 20-30 minutes", "High Knees: 3 sets of 20 reps", "Jump Squats: 3 sets of 12 reps", "Push-ups: 3 sets of 12 reps"],
    mealPlan: ["Meal 1: Eggs with Toast",
               "Meal 2:Chicken Wrap",
               "Meal 3:Salmon with Veggies"],
  },
  {
    day: "Day 7: Upper Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/31055e31-65da-4051-9c85-f25e3e3ecf2e/ad2ecb9b-a26b-4950-92ed-3c57f4f915cb.png",
    exercises: ["Push-ups: 3 sets of 12 reps", "Pull-ups: 3 sets of 8 reps", "Dumbbell Bench Press: 3 sets of 10 reps", "Tricep Dips: 3 sets of 12 reps"],
    mealPlan: ["Meal 1:Greek Yogurt with Honey and Nuts",
               "Meal 2:Chicken Salad",
               "Meal 3:Grilled Veggies with Quinoa"],
  },
  {
    day: "Day 8: Full Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/74039f45-ef27-425f-8b00-3b9495a7e2d5/e27b985f-c046-4fb5-b2ef-8f2b2da0a516.png",
    exercises: ["Burpees: 3 sets of 10 reps", "Deadlifts: 3 sets of 8 reps", "Push-ups: 3 sets of 12 reps", "Plank Rows: 3 sets of 10 reps per side"],
    mealPlan: ["Meal 1:Chia Pudding", 
               "Meal 2:Grilled Chicken with Sweet Potatoes",
               "Meal 3:Veggie Stir-fry with Brown Rice"],
  },
];



const SecondPage = () => {
  const [expanded, setExpanded] = useState(Array(workouts.length).fill(false));
  const [showMealPlan, setShowMealPlan] = useState(Array(workouts.length).fill(false));

  const toggleContent = (index) => {
    setExpanded((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  const toggleMealPlan = (index) => {
    setShowMealPlan((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
  
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
{workouts.map((workout, index) => (
  <div key={index} className="card p-4 bg-white rounded-lg shadow-md">
    <img src={workout.image} alt="workout" className="w-full h-40 object-cover rounded-md" />
    <div className="p-4">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        onClick={() => toggleContent(index)}
      >
        {workout.day}
      </button>

        {expanded[index] && (
          <div className="mt-4">
            {workout.exercises.map((exercise, i) => (
              <p key={i}>{exercise}</p>
            ))}
            <button
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-md w-full"
              onClick={() => toggleMealPlan(index)}
            >
              {showMealPlan[index] ? "Hide Meal Plan" : "Show Meal Plan"}
            </button>
            {showMealPlan[index] && (
              <div className="mt-2">
                {workout.mealPlan.map((meal, i) => (
                  <p key={i}>{meal}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  ))}
</div>
  )}

export default SecondPage;


