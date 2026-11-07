export function FindFriendEN() {
  return (
    <div className="stack-left card w-full gap-2 !p-4">
      <div className="flex-container">
        <h3>
          <span className="text-on-background">
            Backend Developer (Internship)
          </span>
          <span className="text-special"> @ Find-Friend.info</span>
        </h3>
        <div className="bg-inner border-special border-1 text-secondary text-sm p-2 rounded">
          November 2025 — February 2026
        </div>
      </div>
      <ul className="space-y-1">
        <li>
          Built data parsers and database population pipelines in Python and
          PostgreSQL (handling ~10,000 records)
        </li>
        <li>
          Integrated an ML service, retrieving its output and post-processing it
          into a human-readable format for end users
        </li>
        <li>
          Reviewed and refactored the codebase to consistent conventions,
          improving readability and onboarding for other contributors.
        </li>
      </ul>
      <div className="flex-bar">
        <span className="tech">Python</span>
        <span className="tech">PostgreSQL</span>
        <span className="tech">Docker</span>
      </div>
    </div>
  );
}

export function FindFriendRU() {
  return (
    <div className="stack-left card w-full gap-2 !p-4">
      <div className="flex-container">
        <h3>
          <span className="text-on-background">
            Backend Разработчик (Стажировка)
          </span>
          <span className="text-special"> @ Find-Friend.info</span>
        </h3>
        <div className="bg-inner border-special border-1 text-secondary text-sm p-2 rounded">
          Ноябрь 2025 — Февраль 2026
        </div>
      </div>
      <ul className="space-y-1">
        <li>
          Создал парсеры данных и пайплайн заполнения базы данных на Python и
          PostgreSQL (обрабатывая ~10,000 записей)
        </li>
        <li>
          Интегрировал ML службу, получая вывод и обрабатывая его в читабельный
          формат для конечного пользователя
        </li>
        <li>
          Переработал существующую кодовую базу в консистентые соглашения, тем
          самым улучшая читаемость
        </li>
      </ul>
      <div className="flex-bar">
        <span className="tech">Python</span>
        <span className="tech">PostgreSQL</span>
        <span className="tech">Docker</span>
      </div>
    </div>
  );
}
