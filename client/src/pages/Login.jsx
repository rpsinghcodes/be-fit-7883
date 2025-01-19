import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Users } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { ToastContainer, toast } from "react-toastify";
import { Input } from "@/components/ui/input";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";
import SignInGoogle from "../components/signInGoogle"; // Corrected import
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempt:", { email, isAdmin });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (isAdmin) {
        navigate("/dashboard");
      } else {
        navigate("/user/home");
      }
      toast.success("Logged in successfully");
    } catch (error) {
      console.error("Login failed", error);
      toast.error("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log("Google Sign In");
    // Implement Google Sign In
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md p-8 glass-morphism rounded-2xl animate-fadeIn">
        <div className="text-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=50&h=50&fit=crop"
            alt="Logo"
            className="w-16 h-16 mx-auto mb-4 rounded-xl"
          />
          <h2 className="text-2xl font-semibold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Sign in to your account</p>
        </div>

        <div className="flex justify-center mb-6">
          <Toggle
            pressed={isAdmin}
            onPressedChange={setIsAdmin}
            className="w-full max-w-[200px]"
          >
            {isAdmin ? (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Admin Mode
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                User Mode
              </div>
            )}
          </Toggle>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <Input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Sign In"
            )}
          </Button>

          {!isAdmin && (
            <>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignIn}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4 mr-2"
                />
                Sign in with Google
              </Button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="/signup" className="text-blue-600 hover:underline">
                  Sign up
                </a>
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;