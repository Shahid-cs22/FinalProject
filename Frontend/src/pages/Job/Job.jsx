import { useEffect, useState } from "react";
import axios from "axios";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data.json");
        setJobs(Object.values(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-5" style={{paddingTop:"15%"}}>
      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.heading}</h3>
          <h5>{job.graduate_courses.join(", ")}</h5>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Job;