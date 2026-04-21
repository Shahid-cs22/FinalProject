import { useLocation, useNavigate } from "react-router-dom";
import "./JobDetails.css";

const JobDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state;

  if (!job) {
    return <h2 className="no-data">No Job Data Found</h2>;
  }

  return (
    <div className="details-container">

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* Top Card */}
      <div className="top-card">
        <div className="top-left">
          <div className="logo">🏢</div>
          <div>
            <h2>{job.job_title}</h2>
            <p className="company">{job.heading}</p>

            <div className="info">
              <span>📍 {job.location}</span>
              <span>💼 {job.employment_type}</span>
              <span>🏠 {job.work_model}</span>
            </div>
          </div>
        </div>

        <button className="apply-btn">Apply</button>
      </div>

      {/* Job Description */}
      <div className="section">
        <h3>Job Description</h3>
        <p>{job.overview}</p>
      </div>

      {/* Skills */}
      <div className="section">
        <h3>Key Skills</h3>
        <div className="tags">
          {job.key_skills?.map((skill, i) => (
            <span key={i} className="tag">{skill}</span>
          ))}
        </div>
      </div>

      {/* Extra Info */}
      <div className="section">
        <h3>Additional Information</h3>
        <p><strong>Industry:</strong> {job.industry}</p>
        <p><strong>Function:</strong> {job.job_function}</p>
        <p><strong>Specialization:</strong> {job.specialization}</p>
        <p><strong>Courses:</strong> {job.graduate_courses?.join(", ")}</p>
        <p><strong>Gender:</strong> {job.gender}</p>
      </div>

    </div>
  );
};

export default JobDetails;