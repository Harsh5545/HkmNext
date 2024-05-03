
import TyperWriteComponent from 'typewriter-effect';
import "./homeStyles.css"
function TyperWriter() {
  return (
    <div className='text-2xl'>
      <TyperWriteComponent
        options={{
          autoStart: true,
          loop: true,
          delay: 30,
          strings: [
            "Game Design",
            "3D Modeling",
            "Graphics Design",
            "3D Architecture"
          ],
        }}
        
      />
    </div>
  );
}

export default TyperWriter;
