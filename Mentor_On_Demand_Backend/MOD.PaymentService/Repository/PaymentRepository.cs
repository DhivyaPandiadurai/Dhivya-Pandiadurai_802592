using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MOD.PaymentService.Context;
using MOD.PaymentService.Models;

namespace MOD.PaymentService.Repository
{
    public class PaymentRepository : IPaymentRepository
    {
        private readonly PaymentContext _context;
        public PaymentRepository(PaymentContext context)
        {
            _context = context;
        }
        public List<Payment> GetAll()
        {
            try
            {
                return _context.payment.ToList();
            }
            catch(Exception)
            {
                throw;
            }
            
        }

        public void AddPaymentDetails(Payment item)
        {
            try
            {
                _context.payment.Add(item);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }


        }
    }
}
