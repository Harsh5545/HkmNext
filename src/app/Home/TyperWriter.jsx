
import TyperWriteComponent from 'typewriter-effect';
import "./homeStyles.css"
function TyperWriter() {
  return (
    <div className=' font-poppins font-normal lg:font-medium text-base lg:text-2xl'>
      <TyperWriteComponent
        options={{
          autoStart: true,
          loop: true,
          delay: 20,
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
