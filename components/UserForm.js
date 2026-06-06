"use client";

import { useState } from "react";

const UserForm = ({ addUser }) => {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    company: "",
    website: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.username.trim()) {
      newErrors.username = "Username is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!form.city.trim()) {
      newErrors.city = "City is required";
    }

    if (!form.company.trim()) {
      newErrors.company =
        "Company name is required";
    }

    if (
      Object.keys(newErrors).length > 0
    ) {
      setErrors(newErrors);
      return;
    }

    addUser(form);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    setForm({
      name: "",
      username: "",
      email: "",
      phone: "",
      city: "",
      company: "",
      website: "",
    });

    setErrors({});
  };

  return (
    <>
      {success && (
        <div className="success-overlay">
          <div className="success-modal">
            <div className="success-icon">
              ✓
            </div>

            <h3>
              User Added Successfully
            </h3>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="user-form"
      >
        <h2>Add User</h2>

        <div className="form-grid">
          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name:
                    e.target.value,
                })
              }
            />
            {errors.name && (
              <p className="error-text">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              value={form.username}
              onChange={(e) =>
                setForm({
                  ...form,
                  username:
                    e.target.value,
                })
              }
            />
            {errors.username && (
              <p className="error-text">
                {errors.username}
              </p>
            )}
          </div>

          <div>
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email:
                    e.target.value,
                })
              }
            />
            {errors.email && (
              <p className="error-text">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Phone"
              value={form.phone}
              maxLength={10}
              onChange={(e) => setForm({ ...form, phone: e.target.value })
              }
            />
            {errors.phone && (
              <p className="error-text">
                {errors.phone}
              </p>
            )}
          </div>

          <div>
            <input
              className="form-input"
              type="text"
              placeholder="City"
              value={form.city}
              onChange={(e) =>
                setForm({
                  ...form,
                  city:
                    e.target.value,
                })
              }
            />
            {errors.city && (
              <p className="error-text">
                {errors.city}
              </p>
            )}
          </div>

          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Company Name"
              value={form.company}
              onChange={(e) =>
                setForm({
                  ...form,
                  company:
                    e.target.value,
                })
              }
            />
            {errors.company && (
              <p className="error-text">
                {errors.company}
              </p>
            )}
          </div>

          <div>
            <input
              className="form-input"
              type="text"
              placeholder="Website"
              value={form.website}
              onChange={(e) =>
                setForm({
                  ...form,
                  website:
                    e.target.value,
                })
              }
            />
          </div>
        </div>

        <button
          className="submit-btn"
          type="submit"
        >
          Add User
        </button>
      </form>
    </>
  );
};

export default UserForm;