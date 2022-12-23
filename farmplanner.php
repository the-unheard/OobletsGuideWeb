<!DOCTYPE HTML>
<html lang="en">
	<head>
	<title>Ooblets Guide | Farm Planner</title>
		<?php include('php/meta.php'); ?>

		<!--[if !IE]><!-->
		<link rel="stylesheet" href="css/farmplanner.css?v=1653284088" />
		<!--<![endif]-->

		<!--[if gte IE 7]>
				<link rel="stylesheet" type="text/css" href="/css/main.css?v=1653284088" media="screen, projection" />
		<![endif]-->

	</head>
		
	<body>
		<?php include('php/header.php'); ?>

		<main class="fp-main mb-5">
			<div class="p-2 bg-light mx-auto" style="height: 1018px; width: 1600px;">
				<!-- top controls -->
				<div class="fp-topcontrols og-bg-gray-300 mb-2 p-2 rounded">
					<div class="fp-demos float-start">
						<span>DEMO</span>
						<button class="fp-demo rounded-start" data-type="d1">1</button>
						<button class="fp-demo" data-type="d2">2</button>
						<button class="fp-demo" data-type="d3">3</button>
						<button class="fp-demo" data-type="d4">4</button>
						<button class="fp-demo" data-type="d5">5</button>
						<button class="fp-demo" data-type="d6">6</button>
						<button class="fp-demo rounded-end" data-type="d7">7</button>
					</div>
					<div class="fp-buttons float-start">
						<button class="fp-demo clear rounded-start"  data-type="c">Clear</button>
						<button class="fp-topbutton screenshot" data-bs-toggle="modal" data-bs-target="#fp-canvasModal">Get Image</button>
						<button class="fp-topbutton code-get">Get Code</button>
						<button class="fp-topbutton code-apply rounded-end">Apply Code</button>
						<input type="text" class="form-control d-inline-block fp-codeinput" placeholder="Farm code">
						<button class="fp-topbutton code-copy rounded-end">Copy</button>
						<span class="fp-error"></span>
					</div>
				</div>

				<!-- farm -->
				<div class="fp-farmwrap og-bg-grassgreen rounded float-start">
					<div class="fp-fence-top"></div>
					<div class="fp-fence-left"></div>
					<div class="fp-farm"></div>
					<div class="fp-fence-right"></div>
					<div class="fp-fence-bot"></div>
				</div>

				<div class="fp-controlwrap rounded float-start" id="fp-controlParent">

					<div class="fp-selected text-center mb-4">
						<p class="m-0 text-light">Selected Tile</p>
						<div class="fp-selectedTile land mt-5 og-bg-grassgreen d-inline-block"></div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="fp-page1">
							<button class="accordion-button text-light" type="button" data-bs-toggle="disabled" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Farm Stuff</button>
						</h2>
						<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="fp-page1" data-bs-parent="#fp-controlParent">
							<div class="accordion-body og-bg-grassgreen">
								<div class="controls-btn land" style="filter: brightness(90%);"></div>
								<div class="controls-btn path"></div>
								<div class="controls-btn tilled"></div>
								<div class="controls-btn coop1"></div>
								<div class="controls-btn coop2"></div>
								<div class="controls-btn coop3"></div>
								<div class="controls-btn coop4"></div>
								<div class="controls-btn coop5"></div>
								<div class="controls-btn crunchster"></div>
								<div class="controls-btn swooshler"></div>
								<div class="controls-btn sprinkler_basic"></div>
								<div class="controls-btn sprinkler_good"></div>
								<div class="controls-btn sprinkler_medium"></div>
								<div class="controls-btn rock"></div>
								<div class="controls-btn wood"></div>
								<div class="controls-btn weed"></div>
								<div class="controls-btn spaceheater"></div>
								<div class="controls-btn sprinklehot"></div>
								<div class="controls-btn sprinklehot_xl"></div>
								<div class="controls-btn ooblet_seed1_nbg"></div>
								<div class="controls-btn ooblet_seed2_nbg"></div>
								<div class="controls-btn ooblet_seed3_nbg"></div>
								<div class="controls-btn caroot_nbg"></div>
								<div class="controls-btn cellulettuce_nbg"></div>
								<div class="controls-btn clothplant_nbg"></div>
								<div class="controls-btn dregplant_nbg"></div>
								<div class="controls-btn fartichoke_nbg"></div>
								<div class="controls-btn flooti_nbg"></div>
								<div class="controls-btn freep_nbg"></div>
								<div class="controls-btn hyperglob_nbg"></div>
								<div class="controls-btn lopauliflower_nbg"></div>
								<div class="controls-btn muz_nbg"></div>
								<div class="controls-btn pompadoot_nbg"></div>
								<div class="controls-btn sparkflower_nbg"></div>
								<div class="controls-btn springbean_nbg"></div>
								<div class="controls-btn sweetiebeetie_nbg"></div>
								<div class="controls-btn thimbi_nbg"></div>
								<div class="controls-btn zinooka_nbg"></div>
							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="fp-page2">
							<button class="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Common Ooblets</button>
						</h2>
						<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="fp-page2" data-bs-parent="#fp-controlParent">
							<div class="accordion-body og-bg-grassgreen">
								<div class="controls-btn c_angkze"></div>
								<div class="controls-btn c_bibbin"></div>
								<div class="controls-btn c_bittle"></div>
								<div class="controls-btn c_bristlebud"></div>
								<div class="controls-btn c_chickadingding"></div>
								<div class="controls-btn c_clickyclaws"></div>
								<div class="controls-btn c_clomper"></div>
								<div class="controls-btn c_derble"></div>
								<div class="controls-btn c_dooziedug"></div>
								<div class="controls-btn c_dumbirb"></div>
								<div class="controls-btn c_firmo"></div>
								<div class="controls-btn c_fleeble"></div>
								<div class="controls-btn c_fripp"></div>
								<div class="controls-btn c_glanter"></div>
								<div class="controls-btn c_gloopylonglegs"></div>
								<div class="controls-btn c_grebun"></div>
								<div class="controls-btn c_gubwee"></div>
								<div class="controls-btn c_gullysplots"></div>
								<div class="controls-btn c_gumple"></div>
								<div class="controls-btn c_hermble"></div>
								<div class="controls-btn c_isopud"></div>
								<div class="controls-btn c_jama"></div>
								<div class="controls-btn c_kingwa"></div>
								<div class="controls-btn c_legsy"></div>
								<div class="controls-btn c_lickzer"></div>
								<div class="controls-btn c_lumpstump"></div>
								<div class="controls-btn c_marshling"></div>
								<div class="controls-btn c_moogy"></div>
								<div class="controls-btn c_namnam"></div>
								<div class="controls-btn c_nuppo"></div>
								<div class="controls-btn c_oogum"></div>
								<div class="controls-btn c_pantsabear"></div>
								<div class="controls-btn c_petula"></div>
								<div class="controls-btn c_plob"></div>
								<div class="controls-btn c_quabbo"></div>
								<div class="controls-btn c_radlad"></div>
								<div class="controls-btn c_shrumbo"></div>
								<div class="controls-btn c_sidekey"></div>
								<div class="controls-btn c_skuffalo"></div>
								<div class="controls-btn c_snurfler"></div>
								<div class="controls-btn c_spuddle"></div>
								<div class="controls-btn c_tamlin"></div>
								<div class="controls-btn c_tud"></div>
								<div class="controls-btn c_unnyhunny"></div>
								<div class="controls-btn c_whirlitzer"></div>
								<div class="controls-btn c_wigglewip"></div>
								<div class="controls-btn c_wuddlin"></div>
							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="fp-page3">
							<button class="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Uncommon Ooblets</button>
						</h2>
						<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="fp-page3" data-bs-parent="#fp-controlParent">
							<div class="accordion-body og-bg-grassgreen">
								<div class="controls-btn u_angkze"></div>
								<div class="controls-btn u_bibbin"></div>
								<div class="controls-btn u_bittle"></div>
								<div class="controls-btn u_bristlebud"></div>
								<div class="controls-btn u_chickadingding"></div>
								<div class="controls-btn u_clickyclaws"></div>
								<div class="controls-btn u_clomper"></div>
								<div class="controls-btn u_derble"></div>
								<div class="controls-btn u_dooziedug"></div>
								<div class="controls-btn u_dumbirb"></div>
								<div class="controls-btn u_firmo"></div>
								<div class="controls-btn u_fleeble"></div>
								<div class="controls-btn u_fripp"></div>
								<div class="controls-btn u_glanter"></div>
								<div class="controls-btn u_gloopylonglegs"></div>
								<div class="controls-btn u_grebun"></div>
								<div class="controls-btn u_gubwee"></div>
								<div class="controls-btn u_gullysplots"></div>
								<div class="controls-btn u_gumple"></div>
								<div class="controls-btn u_hermble"></div>
								<div class="controls-btn u_isopud"></div>
								<div class="controls-btn u_jama"></div>
								<div class="controls-btn u_kingwa"></div>
								<div class="controls-btn u_legsy"></div>
								<div class="controls-btn u_lickzer"></div>
								<div class="controls-btn u_lumpstump"></div>
								<div class="controls-btn u_marshling"></div>
								<div class="controls-btn u_moogy"></div>
								<div class="controls-btn u_namnam"></div>
								<div class="controls-btn u_nuppo"></div>
								<div class="controls-btn u_oogum"></div>
								<div class="controls-btn u_pantsabear"></div>
								<div class="controls-btn u_petula"></div>
								<div class="controls-btn u_plob"></div>
								<div class="controls-btn u_quabbo"></div>
								<div class="controls-btn u_radlad"></div>
								<div class="controls-btn u_shrumbo"></div>
								<div class="controls-btn u_sidekey"></div>
								<div class="controls-btn u_skuffalo"></div>
								<div class="controls-btn u_snurfler"></div>
								<div class="controls-btn u_spuddle"></div>
								<div class="controls-btn u_tamlin"></div>
								<div class="controls-btn u_tud"></div>
								<div class="controls-btn u_unnyhunny"></div>
								<div class="controls-btn u_whirlitzer"></div>
								<div class="controls-btn u_wigglewip"></div>
								<div class="controls-btn u_wuddlin"></div>
							</div>
						</div>
					</div>

					<div class="accordion-item">
						<h2 class="accordion-header" id="fp-page4">
							<button class="accordion-button collapsed text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Gleamy Ooblets</button>
						</h2>
						<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="fp-page4" data-bs-parent="#fp-controlParent">
							<div class="accordion-body og-bg-grassgreen">
								<div class="controls-btn g_angkze"></div>
								<div class="controls-btn g_bibbin"></div>
								<div class="controls-btn g_bittle"></div>
								<div class="controls-btn g_bristlebud"></div>
								<div class="controls-btn g_chickadingding"></div>
								<div class="controls-btn g_clickyclaws"></div>
								<div class="controls-btn g_clomper"></div>
								<div class="controls-btn g_derble"></div>
								<div class="controls-btn g_dooziedug"></div>
								<div class="controls-btn g_dumbirb"></div>
								<div class="controls-btn g_firmo"></div>
								<div class="controls-btn g_fleeble"></div>
								<div class="controls-btn g_fripp"></div>
								<div class="controls-btn g_glanter"></div>
								<div class="controls-btn g_gloopylonglegs"></div>
								<div class="controls-btn g_grebun"></div>
								<div class="controls-btn g_gubwee"></div>
								<div class="controls-btn g_gullysplots"></div>
								<div class="controls-btn g_gumple"></div>
								<div class="controls-btn g_hermble"></div>
								<div class="controls-btn g_isopud"></div>
								<div class="controls-btn g_jama"></div>
								<div class="controls-btn g_kingwa"></div>
								<div class="controls-btn g_legsy"></div>
								<div class="controls-btn g_lickzer"></div>
								<div class="controls-btn g_lumpstump"></div>
								<div class="controls-btn g_marshling"></div>
								<div class="controls-btn g_moogy"></div>
								<div class="controls-btn g_namnam"></div>
								<div class="controls-btn g_nuppo"></div>
								<div class="controls-btn g_oogum"></div>
								<div class="controls-btn g_pantsabear"></div>
								<div class="controls-btn g_petula"></div>
								<div class="controls-btn g_plob"></div>
								<div class="controls-btn g_quabbo"></div>
								<div class="controls-btn g_radlad"></div>
								<div class="controls-btn g_shrumbo"></div>
								<div class="controls-btn g_sidekey"></div>
								<div class="controls-btn g_skuffalo"></div>
								<div class="controls-btn g_snurfler"></div>
								<div class="controls-btn g_spuddle"></div>
								<div class="controls-btn g_tamlin"></div>
								<div class="controls-btn g_tud"></div>
								<div class="controls-btn g_unnyhunny"></div>
								<div class="controls-btn g_whirlitzer"></div>
								<div class="controls-btn g_wigglewip"></div>
								<div class="controls-btn g_wuddlin"></div>
							</div>
						</div>
					</div>
				</div>
				<!-- controls end -->
			</div>
		</main>

		<!-- Modal for screenshot -->
		<div class="modal fade" id="fp-canvasModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title">Farm Planner</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body mx-auto">
						<div class="spinner-border" role="status">
							<span class="visually-hidden">Loading...</span>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>

			<script src='js/jquery-3.2.1.min.js'></script>
			<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
			<script src='js/html2canvas.js'></script>
			<script src='js/farmplanner.js?v=1653302458'></script>
			
	</body>
</html>