import { Star, Users, BookOpen } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CourseCard({ course }) {
  const totalLessons = course.sections.reduce(
    (acc, section) => acc + section.lessons.length,
    0,
  );

  return (
    <article className="group overflow-hidden rounded-[24px] border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
          {course.classType}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category */}
        <p className="mb-2 text-sm font-medium text-primary">
          {course.category}
        </p>

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-2xl font-bold leading-snug text-text-primary">
          {course.title}
        </h2>

        {/* Description */}
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-text-secondary">
          {course.description}
        </p>

        {/* Stats */}
        <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            {course.rating}
          </div>

          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.totalStudents} Students
          </div>

          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {totalLessons} Lessons
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-6 flex items-center gap-3">
          <span className="text-3xl font-black text-primary">
            ৳{course.discountPrice}
          </span>

          <span className="text-lg text-text-secondary line-through">
            ৳{course.price}
          </span>
        </div>

        {/* CTA */}
        <NavLink
          to={`/courses/${course.slug}`}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
        >
          View Course
        </NavLink>
      </div>
    </article>
  );
}
