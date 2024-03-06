
  gsap.registerPlugin(ScrollTrigger);
// for about section
const aboutMain = document.querySelectorAll('.about_section')

aboutMain.forEach(entry => {
  let aboutTag = entry.querySelector('.about_tag')
  let aboutMedia = entry.querySelector('.about_media')
  let aboutText = entry.querySelector('.about_text')

  // gsap.set(aboutTag,{
  //   xPercent: 100,
  //   opacity: 0
  // })
  // gsap.set(aboutMedia,{
  //   xPercent: -100,
  //   opacity: 0
  // })
  // gsap.set(aboutText,{
  //   xPercent: 100,
  //   opacity: 0
  // })

  // gsap.to(aboutTag,{
  //   scrollTrigger:{
  //     trigger: entry,
  //     start: 'top bottom',
  //     end: 'bottom 90%',
  //     marker: true,
  //     scrub: true
  //   },
  //   xPercent: 0,
  //   opacity: 1
  // })

  // gsap.to(aboutMedia,{
  //   scrollTrigger:{
  //     trigger: entry,
  //     start: 'top bottom',
  //     end: 'bottom 90%',
  //     marker: true,
  //     scrub: true
  //   },
  //   xPercent: 0,
  //   opacity: 1
  // })

  // gsap.to(aboutText,{
  //   scrollTrigger:{
  //     trigger: entry,
  //     start: 'top bottom', //starting point of animation
  //     end: 'bottom 90%', // end  point of animation
  //     marker: true,
  //     scrub: true
  //   },
  //   xPercent: 0,
  //   opacity: 1
  // })

    // shorter version of code scroll trigger

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
      }
    })

    tl.fromTo(aboutTag,{yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1})
    tl.fromTo(aboutMedia,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1}, '<')
    tl.fromTo(aboutText,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1} , '<')
})


//for  what i do section
const skillsMain = document.querySelectorAll('.what_i_do_section')

skillsMain.forEach(entry => {
  let skillsTag = entry.querySelector('.what_i_do')
  let myJobsFE = entry.querySelector('.my_jobs_fe')
  let myJobsGD = entry.querySelector('.my_jobs_gd')
  let myJobsO = entry.querySelector('.my_jobs_o')

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
      }
    })

    tl.fromTo(skillsTag,{xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
    tl.fromTo(myJobsFE,{yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    tl.fromTo(myJobsGD,{yPercent: 200, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    tl.fromTo(myJobsO,{yPercent: 300, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    
})

// for education section
const educationMain = document.querySelectorAll('.education_section')

educationMain.forEach(entry => {
  let educationTag = entry.querySelector('.education_tag')
  let educationMedia = entry.querySelector('.education_media')
  let educationText = entry.querySelector('.education_text')

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true
      }
    })

    tl.fromTo(educationTag,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1})
    tl.fromTo(educationMedia,{yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    tl.fromTo(educationText,{yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    
    
})

// for ojt section
const ojtSection = document.querySelectorAll('.ojt_section')

ojtSection.forEach(entry => {
  let ojtTag = entry.querySelector('.ojt_tag')

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'top 50%',
        scrub: true,

      }
    })

    tl.fromTo(ojtTag,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1})
})



// for ojt section
const ojtMain = document.querySelectorAll('.ojt_flex')

ojtMain.forEach(entry => {
  let ojtMedia = entry.querySelector('.ojt_media')
  let ojtText = entry.querySelector('.ojt_text')

    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      }
    })

    tl.fromTo(ojtMedia,{yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    tl.fromTo(ojtText,{yPercent: 100, opacity: 0,}, {yPercent: 0, opacity: 1,}, '<')
    
})



// for My Skills section
const skillstMain = document.querySelectorAll('.skills_section')

skillstMain.forEach(entry => {
  let skillsTag = entry.querySelector('.skills_tag')
  let slideShowContainer = entry.querySelector('.slideshow-container')


    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      }
    })

    tl.fromTo(skillsTag,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1})
    tl.fromTo(slideShowContainer,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1},'<')
    
})






// for saying section
const sayingtMain = document.querySelectorAll('.saying')

sayingtMain.forEach(entry => {
  let jack = entry.querySelector('.jack')



    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      }
    })

    tl.fromTo(jack,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1})
    
})




// for graphic design section
const graphicDesignMain = document.querySelectorAll('.graphicdesign_section')

graphicDesignMain.forEach(entry => {
  let graphicTag = entry.querySelector('.graphic_tag')




    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 100%',
        scrub: true,e
      }
    })

    tl.fromTo(graphicTag,{yPercent: -100, opacity: 0}, {yPercent: 0, opacity: 1},'<')

    
})






// for front end section
const frontendProjectMain = document.querySelectorAll('.frontend_project')

frontendProjectMain.forEach(entry => {
  let frontendTag = entry.querySelector('.frontend_tag')
  let frontendMain = entry.querySelector('.frontend_main')




    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      }
    })

    tl.fromTo(frontendTag,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1})
    tl.fromTo(frontendMain,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1},'<')

    
})







// 
const platformMain = document.querySelectorAll('.platforms_section')

platformMain.forEach(entry => {
  let platformTag = entry.querySelector('.platforms_tag')
  let fb = entry.querySelector('.fb')
  let ig = entry.querySelector('.ig')
  let twit = entry.querySelector('.twit')
  let tiktok = entry.querySelector('.tiktok')




    let tl = gsap.timeline({
      scrollTrigger:{
        trigger: entry,
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
      }
    })

    tl.fromTo(platformTag,{xPercent: -100, opacity: 0}, {xPercent: 0, opacity: 1})
    tl.fromTo(fb,{yPercent: 100, opacity: 0}, {yPercent: 0, opacity: 1},'<')
    tl.fromTo(ig,{yPercent: 300, opacity: 0}, {yPercent: 0, opacity: 1},'<')
    tl.fromTo(twit,{yPercent: 600, opacity: 0}, {yPercent: 0, opacity: 1},'<')
    tl.fromTo(tiktok,{yPercent: 900, opacity: 0}, {yPercent: 0, opacity: 1},'<')

    
})

















































//lenis smooth scroll
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
