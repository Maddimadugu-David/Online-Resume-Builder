# Online-Resume-Builder
<!-- PREVIEW WRAPPER -->
<div class="flex-1 bg-slate-100 dark:bg-slate-900 p-6 overflow-y-auto flex justify-center items-start print:p-0 print:bg-white">
  
  <!-- A4 PAPER CANVAS -->
  <div 
    id="resume-paper" 
    class="w-[210mm] min-h-[297mm] bg-white text-slate-800 shadow-2xl p-10 print:shadow-none print:w-full print:min-h-0 print:p-0 transition-all duration-200"
    style="font-family: var(--resume-font, 'Inter', sans-serif);"
  >
    
    <!-- HEADER SECTION -->
    <header class="border-b-2 pb-6 mb-6 flex justify-between items-center" style="border-color: var(--primary-color, #2563eb);">
      <div>
        <h1 class="text-3xl font-bold tracking-tight text-slate-900" id="pv-name">Alex Morgan</h1>
        <p class="text-lg font-medium text-slate-600 mt-1" id="pv-title" style="color: var(--primary-color, #2563eb);">
          Senior Full Stack Engineer
        </p>
        
        <!-- CONTACT INFORMATION BAR -->
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600 mt-3 print:text-slate-800">
          <span id="pv-email" class="flex items-center gap-1"><i class="fas fa-envelope"></i> alex@example.com</span>
          <span id="pv-phone" class="flex items-center gap-1"><i class="fas fa-phone"></i> +1 (555) 019-2834</span>
          <span id="pv-location" class="flex items-center gap-1"><i class="fas fa-map-marker-alt"></i> San Francisco, CA</span>
          <span id="pv-website" class="flex items-center gap-1"><i class="fas fa-globe"></i> alexmorgan.dev</span>
        </div>
      </div>

      <!-- AVATAR / PHOTO (OPTIONAL) -->
      <img id="pv-photo" src="" alt="Profile Photo" class="w-20 h-20 rounded-full object-cover border-2 hidden" style="border-color: var(--primary-color, #2563eb);" />
    </header>

    <!-- PROFESSIONAL SUMMARY -->
    <section class="mb-6 break-inside-avoid">
      <h2 class="text-sm font-bold uppercase tracking-wider mb-2" style="color: var(--primary-color, #2563eb);">
        Professional Summary
      </h2>
      <p id="pv-summary" class="text-xs text-slate-700 leading-relaxed">
        Passionate software engineer with 6+ years of experience designing scalable web applications...
      </p>
    </section>

    <!-- WORK EXPERIENCE SECTION -->
    <section class="mb-6">
      <h2 class="text-sm font-bold uppercase tracking-wider mb-3 border-b pb-1" style="color: var(--primary-color, #2563eb);">
        Work Experience
      </h2>
      <div id="pv-experience-list" class="space-y-4">
        <!-- EXPERIENCE ITEM (REPEATABLE) -->
        <div class="experience-item break-inside-avoid">
          <div class="flex justify-between items-baseline">
            <h3 class="text-xs font-bold text-slate-900">Lead Software Architect</h3>
            <span class="text-[10px] text-slate-500 font-medium">Jan 2022 — Present</span>
          </div>
          <div class="text-[11px] font-semibold text-slate-700 mb-1">TechCorp Solutions Inc.</div>
          <ul class="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
            <li>Architected high-throughput microservices handling 10M+ daily events using Node.js and AWS.</li>
            <li>Reduced infrastructure costs by 35% through containerization and automated CI/CD pipelines.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- EDUCATION SECTION -->
    <section class="mb-6 break-inside-avoid">
      <h2 class="text-sm font-bold uppercase tracking-wider mb-3 border-b pb-1" style="color: var(--primary-color, #2563eb);">
        Education
      </h2>
      <div id="pv-education-list" class="space-y-3">
        <div class="education-item">
          <div class="flex justify-between items-baseline">
            <h3 class="text-xs font-bold text-slate-900">B.S. in Computer Science</h3>
            <span class="text-[10px] text-slate-500">2016 — 2020</span>
          </div>
          <div class="text-[11px] text-slate-700">University of California, Berkeley</div>
        </div>
      </div>
    </section>

    <!-- SKILLS SECTION -->
    <section class="mb-6 break-inside-avoid">
      <h2 class="text-sm font-bold uppercase tracking-wider mb-2 border-b pb-1" style="color: var(--primary-color, #2563eb);">
        Skills & Technologies
      </h2>
      <div id="pv-skills-list" class="flex flex-wrap gap-1.5 pt-1">
        <span class="px-2 py-0.5 bg-slate-100 text-slate-800 text-[10px] font-medium rounded border border-slate-200">TypeScript</span>
        <span class="px-2 py-0.5 bg-slate-100 text-slate-800 text-[10px] font-medium rounded border border-slate-200">React / Next.js</span>
        <span class="px-2 py-0.5 bg-slate-100 text-slate-800 text-[10px] font-medium rounded border border-slate-200">Tailwind CSS</span>
      </div>
    </section>

  </div>
</div>
