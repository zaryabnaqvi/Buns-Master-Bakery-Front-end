import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Wrapper>
      <div className="container">
        <div className="register">
          <div className="col-1">
            <h2 style={{color:"black"}}>Login</h2>
            <span>Login now and enjoy our pizza 🍕</span>
            <form
              id="form"
              className="flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
              />
              {errors.email && <p>Email ID is required.</p>}
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="password"
              />
              {errors.password && <p>Password is required.</p>}

              <button className="btn">
                Login <FiArrowRight />
              </button>
            </form>
            <div className="register-account">
              Don't have an account?
              <button
                className="register-btn"
                onClick={() => props.onformSwitch("Register")}
              >
                Register
              </button>
            </div>
          </div>
          <div className="col-2">
            <img src="/images/login-img.jpg" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .register {
    max-width: 80rem;
    margin: 6rem auto;
    display: flex;
    flex-direction: column;
    border: 1px solid #e9ecef;
    border-radius: 1rem;
    background-color: white;
    box-shadow: rgb(136, 136, 136) 0px 0px 5px 0px;
  }

  .register span {
    text-align: center;
    color: rgb(173, 181, 189);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.6rem 0 4rem;
    font-size: 1.4rem;
  }

  #form {
    max-width: 320px;
    width: 100vw;
    margin: 0 auto;
    padding: 0 2rem;
  }

  #form > input,
  .btn {
    border: 1px solid #e9ecef;
    padding: 0.9em 1em;
  }

  #form > input:focus {
    outline: none;
  }

  #form > .btn {
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.white};
    padding: 1.2rem;
    outline: none;
    border: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.white};
      border: 1px solid ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.bg};
    }
  }

  #form > input {
    color: ${({ theme }) => theme.colors.black};
    padding: 1.2rem 2rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    text-transform: uppercase;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    border-radius: 0.5rem;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.black};
    }
  }
  .flex {
    display: flex;
    gap: 1em;
  }
  .flex-col {
    flex-direction: column;
  }
  .register .col-1 {
    margin: auto;
    padding: 3rem 0;
    h2 {
      font-size: 3rem;
    }
    .register-account {
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.5rem;
      text-align: center;
      .register-btn {
        border: none;
        outline: none;
        background: transparent;
        color: ${({ theme }) => theme.colors.bg};
        font-size: 1.5rem;
        font-weight: bold;
        cursor: pointer;
        padding-left: 0.6rem;
      }
    }
  }
  .register .col-2 img {
    width: 35rem;
    height: 100%;
    object-fit: cover;
    align-self: flex-end;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    display: none;
  }
  form > p {
    color: darkred;
    opacity: 0.7;
    font-size: 1.4rem;
    line-height: 1.5;
    margin: 0rem 0 1rem;
    font-weight: 400;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .register {
      flex-direction: row;
      margin: 8rem auto;
    }
    .register .col-2 img {
      width: 35rem;
      height: 100%;
      object-fit: cover;
      align-self: flex-end;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      display: block;
    }
    .register .col-1 {
      h2 {
        font-size: 4rem;
      }
    }
    #form {
      padding: 0rem;
    }
    #form > input {
      padding: 1.6rem 2.4rem;
    }
  }
`;

export default Login;
