import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export function UserAvatar({
  user,
  ...props
}: {
  user: { name: string; imageUrl: string };
} & React.ComponentProps<typeof Avatar>) {
  return (
    <Avatar
      className="cursor-pointer hover:shadow-md transition-shadow"
      {...props}
    >
      <AvatarImage src={user.imageUrl} alt={user.name} />
      <AvatarFallback>
        {user.name
          .split(" ")
          .slice(0, 2)
          .map((name) => name[0])
          .join("")
          .toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
