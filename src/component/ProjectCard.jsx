import { useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectCard({ project }) {
  const [showFeatures, setShowFeatures] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "rgba(31,41,55,0.6)",
        border: "1px solid #374151",
        borderRadius: "1rem",
        overflow: "hidden",
        transition: "0.3s",
      }}
      className="project-card"
    >
      {/* Image */}
      <div 
        style={{ 
          height: "200px", 
          position: "relative",
          overflow: "hidden"
        }}
      >
        <img
          src={project.screenshot}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: "700", marginBottom: "0.25rem" }}>
          {project.title}
        </h3>
        <p style={{ color: "#60a5fa", marginBottom: ".5rem", fontSize: "0.875rem" }}>
          {project.subtitle}
        </p>

        <p style={{ color: "#d1d5db", fontSize: ".9rem", marginBottom: "1rem", lineHeight: "1.5" }}>
          {project.description}
        </p>

        {/* Tech */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "1rem" }}>
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              style={{
                fontSize: ".75rem",
                padding: ".25rem .5rem",
                background: "#374151",
                borderRadius: ".25rem",
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span
              style={{
                fontSize: ".75rem",
                padding: ".25rem .5rem",
                background: "#1f2937",
                borderRadius: ".25rem",
                color: "#9ca3af"
              }}
            >
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Show Features Button */}
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          style={{
            width: "100%",
            padding: "0.75rem",
            background: "rgba(59, 130, 246, 0.1)",
            border: "1px solid rgba(59, 130, 246, 0.3)",
            borderRadius: "0.5rem",
            color: "#60a5fa",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            marginBottom: "1rem",
            transition: "all 0.3s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(59, 130, 246, 0.2)";
            e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
            e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
          }}
        >
          {showFeatures ? (
            <>
              Hide Features <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show Key Features <ChevronDown size={16} />
            </>
          )}
        </button>

        {/* Features List - Collapsible */}
        {showFeatures && project.features && (
          <div 
            style={{ 
              marginBottom: "1rem",
              animation: "slideDown 0.3s ease-out"
            }}
          >
            <ul style={{ 
              listStyle: "none", 
              margin: 0,
              background: "rgba(17, 24, 39, 0.5)",
              borderRadius: "0.5rem",
              padding: "1rem"
            }}>
              {project.features.map((feature, i) => (
                <li 
                  key={i} 
                  style={{ 
                    fontSize: "0.875rem", 
                    color: "#d1d5db", 
                    display: "flex", 
                    alignItems: "flex-start",
                    marginBottom: i === project.features.length - 1 ? 0 : "0.75rem",
                    lineHeight: "1.5"
                  }}
                >
                  <span style={{ color: "#22c55e", marginRight: "0.5rem", fontSize: "1rem" }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div style={{ display: "flex", gap: "1rem" }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: ".75rem",
              background: "#374151",
              textAlign: "center",
              borderRadius: ".5rem",
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#4b5563"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#374151"}
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              padding: ".75rem",
              background: "#2563eb",
              textAlign: "center",
              borderRadius: ".5rem",
              color: "white",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontWeight: "500",
              fontSize: "0.875rem",
              transition: "background 0.3s"
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#3b82f6"}
            onMouseLeave={(e) => e.currentTarget.style.background = "#2563eb"}
          >
            <ExternalLink size={16} /> Demo
          </a>
        </div>
      </div>

      <style>{`
        .project-card:hover {
          border-color: rgba(59, 130, 246, 0.5) !important;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}