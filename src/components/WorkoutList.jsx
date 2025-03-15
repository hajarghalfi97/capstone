import React, { useState } from "react";

const workouts = [
  {
    day: "Day 1",
    title: "Upper Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/87537cc5-979c-408b-b665-0b8e32786e27/e3ebb85f-d0f4-4e90-9cb0-5e3ce672b246.png",
    exercises: [
      "Push-ups: 3 sets of 12 reps",
      "Pull-ups: 3 sets of 8 reps",
      "Dumbbell Bench Press: 3 sets of 10 reps",
      "Tricep Dips: 3 sets of 12 reps",
    ],
  },
  {
    day: "Day 2",
    title: "Lower Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f0675f8f-af26-4a7b-b578-7f3305e74df2/495ce76b-2474-49e4-b059-d113c97ca745.png",
    exercises: [
      "Squats: 3 sets of 12 reps",
      "Lunges: 3 sets of 10 reps per leg",
      "Deadlifts: 3 sets of 8 reps",
      "Calf Raises: 3 sets of 15 reps",
    ],
  },
  {
    day: "Day 3",
    title: "Cardio and Core",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/b71c65fe-2026-4aa9-902a-496eea94b71b/69657e97-710b-48a3-b38f-8dfb4184c3b1.png",
    exercises: [
      "Jump Rope: 5 minutes",
      "Plank: 3 sets of 1 minute",
      "Bicycle Crunches: 3 sets of 15 reps per side",
      "Mountain Climbers: 3 sets of 20 reps",
    ],
  },
  {
    day: "Day 4",
    title: "Active Recovery",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/4b0e8a31-34e8-4482-97f6-1d9d1302d6a9/c949698f-1b44-4c05-91c0-a8f985316f08.png",
    exercises: [
      "Yoga or Stretching: 20-30 minutes",
      "Light Walking: 15 minutes",
    ],
  },
  {
    day: "Day 5",
    title: "Full Body Strength",
    image: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f3baa468-92de-404d-80c6-82c3c68525af/e1742ea2-494c-497f-836d-974504dcc183.png",
    exercises: [
      "Burpees: 3 sets of 10 reps",
      "Deadlifts: 3 sets of 8 reps",
      "Push-ups: 3 sets of 12 reps",
      "Plank Rows: 3 sets of 10 reps per side",
    ],
  },
];

const WorkoutCard = ({ day, title, image, exercises }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <button className="toggle-btn" onClick={() => setIsVisible(!isVisible)}>
          {day}: {title}
        </button>
        {isVisible && (
          <div className="hidden-content">
            {exercises.map((exercise, index) => (
              <p key={index}>{exercise}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const WorkoutList = () => {
  return (
    <div className="card-container">
      {workouts.map((workout, index) => (
        <WorkoutCard key={index} {...workout} />
      ))}
    </div>
  );
};

export default WorkoutList;
