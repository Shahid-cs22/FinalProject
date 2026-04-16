import { useEffect, useState } from "react";
import axios from "axios";
import "./Job2.css"

const Job2 = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setJobs(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
        This is JOBN2
      <div className="mx-5  " style={{ paddingTop: "15%" }}>
        {jobs.map((job) => (
          <div key={job.id} className="main">
            <p className="heading">{job.heading}</p>
            <p className="title">{job.job_title}</p>

          <p className="overview">{job.overview}</p>
            <h5>{job.graduate_courses.join(", ")}</h5>
            <h6>{job.key_skills.join(", ")}</h6>
            <p>{job.location}</p>

            <input type="button" value="View Details" className="btnbtn" />
          </div>
        ))}
      </div>
      </div>
  );
};

export default Job2;