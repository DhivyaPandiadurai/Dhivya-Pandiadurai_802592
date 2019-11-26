using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MODUserservice.Context;
using MODUserservice.Models;

namespace MODUserservice.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly MainContext _context;
        public UserRepository(MainContext context)
        {
            _context = context;
        }

        public List<User> GetAll()
        {
            try
            {
                return _context.users.ToList();
            }
            catch(Exception)
            {
                throw;
            }
           
        }
        public void AddUser(User item)
        {
            try
            {
                _context.users.Add(item);
                _context.SaveChanges();
            }
          
             catch (Exception)
            {
                throw;
            }

        }

        public void BlockUser(long id)
        {
            try
            {
                var item = _context.users.Find(id);
                if (item.Active == true)
                {
                    item.Active = !(item.Active);
                }
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
            

             catch (Exception)
            {
                throw;
            }

        }
        public void UnBlockUser(long id)
        {
            try
            {
                var item = _context.users.Find(id);
                if (item.Active == false)
                {
                    item.Active = !(item.Active);
                }
                _context.Entry(item).State = EntityState.Modified;
                _context.SaveChanges();
            }
           

             catch (Exception)
            {
                throw;
            }

        }


        public void DeleteUser(long id)
        {
            try
            {
                var item = _context.users.Find(id);
                _context.users.Remove(item);
                _context.SaveChanges();
            }
            

             catch (Exception)
            {
                throw;
            }

        }

        public User GetById(long id)
        {
            try
            {
                return _context.users.Find(id);
            }
            
             catch (Exception)
            {
                throw;
            }
        }

        public List<Mentor> SearchMentor(string Skill)
        {
            try
            {
                return _context.mentors.Where(i => i.Primary_skill == Skill).ToList();
            } 

             catch (Exception)
            {
                throw;
            }

        }

        public void UpdatePassword(User item)
        {
            try
            {
                _context.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }
            
            catch (Exception)
            {
                throw;
            }

        }
    }
}
