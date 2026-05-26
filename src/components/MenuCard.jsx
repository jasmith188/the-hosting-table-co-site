export default function MenuCard({ menu }) {
  return (
    <article className="menu-card">
      <h3>{menu.title}</h3>
      <div className="course-list">
        {menu.courses.map((course) => (
          <div className="course" key={`${menu.title}-${course.label}`}>
            <p className="course-label">{course.label}</p>
            <p className="menu-item">
              <span className="bullet">•</span>
              {course.item}
            </p>
            {course.description && <p className="description">{course.description}</p>}
          </div>
        ))}
      </div>
    </article>
  );
}
