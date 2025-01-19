import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Camera, Save } from "lucide-react";
import UserFooter from "@/components/footer/userFooter";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    bio: "Software Developer",
  });

  return (
    <>
      <div className="container mx-auto p-6">
        <Card className="max-w-2xl mx-auto p-6">
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-0 right-0"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <h2 className="text-2xl font-bold mt-4">{profile.name}</h2>
            <p className="text-gray-600">{profile.bio}</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <Input
                value={profile.name}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input
                value={profile.email}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <Input
                value={profile.phone}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Bio</label>
              <Input
                value={profile.bio}
                disabled={!isEditing}
                onChange={(e) =>
                  setProfile({ ...profile, bio: e.target.value })
                }
              />
            </div>

            <div className="flex justify-end gap-4">
              <Button
                variant={isEditing ? "outline" : "default"}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>
              {isEditing && (
                <Button className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </Button>
              )}
            </div>
          </div>
        </Card>
      </div>
      <UserFooter />
    </>
  );
};

export default Profile;