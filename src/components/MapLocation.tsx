interface mapSchema {
  lat: number;
  lon: number;
}

function MapLocation({ lat, lon }: mapSchema) {
  return (
    <div>
      <iframe
        title="maps"
        width="100%"
        height={600}
        frameBorder={0}
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${lat},${lon}&t=&z=10&ie=UTF8&iwloc=B&output=embed`}
      />
    </div>
  );
}

export default MapLocation;
