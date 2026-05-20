import { useMemo, useState } from "react";

import CourseCard from "@/components/course/CourseCard";

import coursesData from "@/data/courses.json";

export default function Courses() {
  const [selectedClass, setSelectedClass] = useState("All");

  const [sortBy, setSortBy] = useState("latest");

  const classTypes = [
    "All",
    ...new Set(coursesData.map((course) => course.classType)),
  ];

  const filteredCourses = useMemo(() => {
    let updatedCourses = [...coursesData];

    // Filter
    if (selectedClass !== "All") {
      updatedCourses = updatedCourses.filter(
        (course) => course.classType === selectedClass,
      );
    }

    // Sort
    if (sortBy === "students") {
      updatedCourses.sort((a, b) => b.totalStudents - a.totalStudents);
    }

    if (sortBy === "rating") {
      updatedCourses.sort((a, b) => b.rating - a.rating);
    }

    return updatedCourses;
  }, [selectedClass, sortBy]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-muted py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="mb-4 text-lg font-semibold text-primary">
              Explore Courses
            </p>

            <h1 className="mb-6 text-5xl font-black leading-tight text-text-primary md:text-6xl">
              Learn Mathematics
              <span className="text-primary"> Smartly</span>
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
              Structured mathematics courses for SSC, HSC, and Admission
              preparation with premium learning experience.
            </p>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full border border-primary/20"></div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-30 border-b border-border bg-background/80 py-6 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col gap-4 px-4 md:flex-row md:items-center md:justify-between">
          {/* Class Filters */}
          <div className="flex flex-wrap gap-3">
            {classTypes.map((item) => (
              <button
                key={item}
                onClick={() => setSelectedClass(item)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  selectedClass === item
                    ? "bg-primary text-white"
                    : "border border-border bg-white text-text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-2xl border border-border bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-primary"
          >
            <option value="latest">Latest Released</option>

            <option value="students">Most Students</option>

            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
