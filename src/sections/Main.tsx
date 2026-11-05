import General from "./General";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";

function Main() {
  return (
    <main className="stack-container rounded-xl print:box-decoration-clone">
      <General />
      <hr />
      <Experience />
      <div className="flex w-full gap-2">
        <Skills />
        <div className="stack-center gap-4 flex-1">
          <Projects />
          <Education />
        </div>
      </div>
    </main>
  );
}

export default Main;
