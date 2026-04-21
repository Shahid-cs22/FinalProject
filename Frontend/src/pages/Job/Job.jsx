import { useEffect, useState } from "react";
import axios from "axios";
import "./Job.css";
import { Col, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Job = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");


        const shuffledJobs = res.data.sort(() => Math.random() - 0.5);

        setJobs(shuffledJobs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="maindiv">
      <Row>
        {jobs.map((job) => (
          <Col key={job.id} xs={12} md={6} lg={4} className="mb-4">
            <div className="job-card">


              <div className="job-header">
                <div className="logo">🏢</div>
                <div>
                  <h5 className="job-title">{job.job_title}</h5>
                  <p className="company">{job.heading}</p>
                </div>
              </div>

              {/* Description */}
              <p className="desc">{job.overview}</p>

              {/* Tags */}
              <div className="tags">
                {job.key_skills?.slice(0, 4).map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>

              {/* Footer */}
              <div className="job-footer">
                <span>📍 {job.location}</span>
                <span>⏳ {job.experience || "Not disclosed"}</span>
              </div>

              {/* Button */}
              <button
                className="view-btn"
                onClick={() =>
                  navigate(`/job/${job.job_id}`, { state: job })
                }>View Details </button>

            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Job;