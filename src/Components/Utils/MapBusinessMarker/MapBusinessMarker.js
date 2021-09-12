import './MapBusinessMarker.css';

export default function MapBusinessMarker(props){
    const { color, name, id } = props;
    
    return (
      <div className="marker cursor-pointer color-white text-black h-4 w-4 bg-blue-900"
        title={name}
      ></div>
    );
}