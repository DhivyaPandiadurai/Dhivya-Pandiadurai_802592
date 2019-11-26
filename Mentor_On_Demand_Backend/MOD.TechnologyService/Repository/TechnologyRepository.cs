using MOD.TechnologyService.Context;
using MOD.TechnologyService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MOD.TechnologyService.Repository
{
    public class TechnologyRepository:ITechnologyRepository
    {
          private readonly TechnologyContext _context;
            public TechnologyRepository(TechnologyContext context)
            {
                _context = context;
            }
        public List<Technology> GetAll()
        {
            try
            {
                return _context.technology.ToList();
            }
            catch(Exception)
            {
                throw;
            }
            
        }



        public void AddSkill(Technology item)
        {
            try
            {
                _context.technology.Add(item);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }

        }

        
       public void UpdateSkill(Technology item)
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

        public Technology GetById(long id)
        {
            try
            {
                return _context.technology.Find(id);
            }
            catch (Exception)
            {
                throw;
            }


        }
    }
}
