import { useEffect, useState } from "react";
import axios from "axios";

const Job = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data); // no need Object.values if already array
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-5" style={{ paddingTop: "15%" }}>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.job_title}</h3>
          <h5>{job.graduate_courses.join(", ")}</h5>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
};

export default Job;