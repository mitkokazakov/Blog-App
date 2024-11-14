type BlogType = {
      id: string;
      createdAt: Date;
      title: string;
      body: string;
      description: string;
      username?: string;
      tags: string;
      userId: string;
      isApproved: boolean
  };

  type ChangeBlogType = {
    blogData: {
      id: string;
      createdAt: Date;
      title: string;
      body: string;
      description: string;
      tags: string;
      userId: string;
      username?: string
    };
  };

  type BlogProps = {
    blogProps: {
      id: string;
      createdAt: Date;
      title: string;
      body: string;
      description: string;
      username?: string;
      tags: string;
      userId: string;
      isApproved: boolean;
    };
  };

  type UserRowParams = {
    id: string;
    name: string | null;
    image?: string;
    isDeleted: boolean;
    createdAt: Date;
    email: string;
    role: string;
  };

  type UserParams = {
    id: string ;
    name: string | null;
    image?: string | null;
    isDeleted: boolean;
    createdAt: Date;
    email: string | null;
    role: string | null;
};