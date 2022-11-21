import axios from "axios";
import { useEffect, useState } from "react";
export default function OpenAPIPage() {
  const [image, setImage] = useState("");

  useEffect(() => {
    const imageOn = async () => {
      const apiImage = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(apiImage);
      setImage(apiImage.data.message);
    };
    void imageOn();
  }, []);

  return (
    <div>
      <img src={image} />
    </div>
  );
}
