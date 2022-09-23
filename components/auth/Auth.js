import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

const Auth = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      const errTimer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(errTimer);
    }
  }, [error]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (
      !email ||
      !email.includes("@") ||
      !password ||
      password.trim().length < 7
    ) {
      return;
    }

    const result = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    if (!result.error) {
      router.replace("/admin");
    } else {
      console.log(result.error);
      setError(result.error);
    }
  };

  return (
    <div className="h-[50vh] w-full grid place-items-center">
      <div className="w-[450px] shadow-xl px-6 pb-4 rounded-xl border-2 border-stone-100">
        <h2 className="text-center text-2xl font-bold py-4">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="control-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="control-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-12">
            <button className="button bg-blue-600 text-white w-full">
              login
            </button>
          </div>
        </form>
        {error && <div className="text-red-600 mt-4">{error}</div>}
      </div>
    </div>
  );
};

export default Auth;
