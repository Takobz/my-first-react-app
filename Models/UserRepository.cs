using System;
using System.Collections.Generic;

namespace react_dotnet_example.Models
{
    public class UserRepository : IUserRepository
    {
        private List<UserModel> users = new List<UserModel>();
        private int _nextId = 1;

        public UserRepository()
        {
            Add(new UserModel { firstName= "Sizwe", lastName="Mzila", email="email1@gmail.com"});
            Add(new UserModel { firstName= "Xolani", lastName="Mti", email="email2@gmail.com"});
            Add(new UserModel { firstName= "Khutso", lastName="Kobela", email="email3@gmail.com"});
        }

        public UserModel Add(UserModel user)
        {
            if(user == null)
            {
                throw new ArgumentException("user is null");
            }
            user.Id = _nextId++;
            users.Add(user);
            return user;
        }

        public IEnumerable<UserModel> GetAll()
        {
            return users;
        }
    }
}