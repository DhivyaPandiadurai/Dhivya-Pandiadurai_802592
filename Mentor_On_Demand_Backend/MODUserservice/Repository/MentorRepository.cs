using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MODUserservice.Context;
using MODUserservice.Models;

namespace MODUserservice.Repository
{
    public class MentorRepository : IMentorRepository
    {
        private readonly MainContext _context;
        public MentorRepository(MainContext context)
        {
            _context = context;
        }
        public List<Mentor> GetAll()
        {
            try {
                return _context.mentors.ToList();
            }
            catch (Exception)
            {
                throw;
            }
        }
        public void AddMentor(Mentor item)
        {
            try {
                _context.mentors.Add(item);
                _context.SaveChanges();
            }
            
            catch (Exception)
            {
                throw;
            }
        }

        public void BlockMentor(long id)
        {
            try
            {

                var item = _context.mentors.Find(id);
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
        public void UnBlockMentor(long id)
        {
            try
            {
                var item = _context.mentors.Find(id);
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


        public void DeleteMentor(long id)
        {

            try
            {
                var item = _context.mentors.Find(id);
                _context.mentors.Remove(item);
                _context.SaveChanges();
            }
           
            catch (Exception)
            {
                throw;
            }
        }

        public Mentor GetMentorById(long id)
        {
            try
            {
                return _context.mentors.Find(id);
            }
            catch(Exception)
            {
                throw;
            }
        }

        public void UpdateMentor(Mentor item)
        {
            try
            {
                _context.Entry(item).State = Microsoft.EntityFrameworkCore.EntityState.Modified;
                _context.SaveChanges();
            }
            catch(Exception)
            {
                throw;
            }
            
        }
    }
}
