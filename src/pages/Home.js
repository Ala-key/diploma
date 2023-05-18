
const Home = () => {
  // const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });


  // // document.addEventListener("mousemove", function(event) {
  // //   const x = event.clientX;
  // //   const y = event.clientY;
  // //   setCoordinates({ x, y });
  // // });


  // // document.addEventListener("mouseup", function(event) {
  // //   console.log("Hello");
  // // });

  // let value = 0;

  // useEffect(() => {
  //   const handleMouseUp = (event) => {

          
  //         let div = document.querySelector(".clickingdiv");

      
  //         div.style.transform = `translate(0px, -${value}px)`;

  //         value += 100;
  //   };

  //   document.addEventListener("mouseup", handleMouseUp);

  //   return () => {
  //     document.removeEventListener("mouseup", handleMouseUp);
  //   };
  // }, []);



  // // function Clicking() {
  // //   console.log("Hello");
  // //   // let div = document.querySelector(".clickingdiv");

  // //   // div.style.height = coordinates.y + "px";
  // // }


  return (
    <div>
      <div className='clickingdiv'>Mouse Click</div>
    </div>
  );
};

export default Home;