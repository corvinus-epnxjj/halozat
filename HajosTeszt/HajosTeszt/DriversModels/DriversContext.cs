using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace HajosTeszt.DriversModels
{
    public partial class DriversContext : DbContext
    {
        public DriversContext()
        {
        }

        public DriversContext(DbContextOptions<DriversContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Epnxjj> Epnxjjs { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=szamhalo.database.windows.net;Initial Catalog=Drivers;User ID=isti;Password=A1b2c3d4");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Epnxjj>(entity =>
            {
                entity.HasKey(e => e.VersenyzoId)
                    .HasName("PK__EPNXJJ__E6AA32CED808068C");

                entity.ToTable("EPNXJJ");

                entity.Property(e => e.VersenyzoId).HasColumnName("versenyzoID");

                entity.Property(e => e.Nem)
                    .IsRequired()
                    .HasMaxLength(20)
                    .HasColumnName("nem");

                entity.Property(e => e.Nemzetiseg)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("nemzetiseg");

                entity.Property(e => e.Nev)
                    .IsRequired()
                    .HasMaxLength(50)
                    .HasColumnName("nev");

                entity.Property(e => e.Szulido)
                    .HasColumnType("date")
                    .HasColumnName("szulido");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
