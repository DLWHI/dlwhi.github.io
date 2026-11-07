export function MediaTurkmenEN() {
  return (
    <div className="stack-left card gap-2 !p-4">
      <div className="flex-container">
        <h3>
          <span className="text-on-background">Full-Stack Web Developer</span>
          <span className="text-special"> @ Media Turkmen</span>
        </h3>
        <div className="bg-inner border-special border-1 text-secondary text-sm p-2 rounded">
          April 2026 — Present
        </div>
      </div>
      <ul className="space-y-1">
        <li>
          Designed and built a REST API CMS in Go serving both web and mobile
          clients, with storage, caching and search features.
        </li>
        <li>
          Migrated the existing database to a new, more stable architecture with
          no data loss (~115,000 records)
        </li>
        <li>
          Improved page SEO and integrated analytics, giving the team visibility
          into traffic and content performance
        </li>
        <li>
          Set up and deployed cloud storage, development and Git servers on
          Proxmox, letting the team share files easily
        </li>
      </ul>
      <div className="flex-bar flex-wrap">
        <span className="tech">Next.js</span>
        <span className="tech">React/Typescript</span>
        <span className="tech">PHP/Laravel</span>
        <span className="tech">Go</span>
        <span className="tech">Redis</span>
        <span className="tech">Meilisearch</span>
        <span className="tech">MySQL</span>
        <span className="tech">Proxmox</span>
      </div>
    </div>
  );
}

export function MediaTurkmenRU() {
  return (
    <div className="stack-left card gap-2 !p-4">
      <div className="flex-container">
        <h3>
          <span className="text-on-background">Full-Stack Веб разработчик</span>
          <span className="text-special"> @ Media Turkmen</span>
        </h3>
        <div className="bg-inner border-special border-1 text-secondary text-sm p-2 rounded">
          Апрель 2026 — Настоящее время
        </div>
      </div>
      <ul className="space-y-1">
        <li>
          Разработал и реализовал REST API CMS на Go для мобильных и веб
          клиентов, с системами хранения, кеширования и поиска информации
          соответственно.
        </li>
        <li>
          Перенес существующую базу данных на более стабильную архитектуру, без
          потерь данных (~115,000 записей)
        </li>
        <li>
          Улучшил SEO страницы и интегрировал аналитику, давая команде
          информацию о трафике и эффективности контента
        </li>
        <li>
          Развернул облачное хранилище, а так же Git и сервера разработки на
          Proxmox, давая возможность команде обмениваться файлами без лишних
          проблем
        </li>
      </ul>
    </div>
  );
}
