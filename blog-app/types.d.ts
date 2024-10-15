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
    };
  };