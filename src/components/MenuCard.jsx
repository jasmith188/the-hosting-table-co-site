export default function MenuCard({ menu }) {
  return (
    <details className="thc-menu-card">
      <summary className="thc-menu-summary">
        <span>
          <span className="thc-menu-title">{menu.title}</span>
          {menu.subtitle && <span className="thc-menu-subtitle">{menu.subtitle}</span>}
        </span>
        <span className="thc-menu-toggle" aria-hidden="true">+</span>
      </summary>
      <div className="thc-menu-content">
        <div className="thc-course-grid">
          {menu.courses.map((course) => (
            <div className="thc-course" key={`${menu.title}-${course.label}`}>
              <h3>{course.label}</h3>
              <ul>
                {(course.items || [course.item]).map((item) => <li key={item}>{item}</li>)}
              </ul>
              {course.description && <p>{course.description}</p>}
            </div>
          ))}
        </div>
        <a className="button-outline" href="#contact">Plan a {menu.title.toLowerCase()} dinner</a>
      </div>
    </details>
  );
}
