<?php
/**
 * DokuWiki Bootstrap3 Template: Footer page
 *
 * @link     http://dokuwiki.org/template:bootstrap3
 * @author   Giuseppe Di Terlizzi <giuseppe.diterlizzi@gmail.com>
 * @license  GPL 2 (http://www.gnu.org/licenses/gpl.html)
 */

// must be run from within DokuWiki
if (!defined('DOKU_INC')) die();

global $conf;

$footer_page_exist    = page_findnearest('footer', bootstrap3_conf('useACL'));
$license_is_enabled   = $conf['license'];
$badges_is_enabled    = bootstrap3_conf('showBadges');
$wiki_info_is_enabled = bootstrap3_conf('showWikiInfo');

$logo_size      = array();
$wiki_logo      = tpl_getMediaFile(array(':wiki:logo.png', ':logo.png', 'images/logo.png'), false, $logo_size);
$wiki_title     = $conf['title'];
$wiki_tagline   = ($conf['tagline']) ? '<span class="dw__tagline">'.$conf['tagline'].'</span>' : '';
$wiki_logo_size = 'height="32"';
$wiki_home_link = (bootstrap3_conf('homePageURL') ? bootstrap3_conf('homePageURL') : wl());

?>
<?php if ($wiki_info_is_enabled || $footer_page_exist || $license_is_enabled || $badges_is_enabled): ?>
<footer id="dw__footer" class="navbar <?php echo ((bootstrap3_conf('inverseNavbar')) ? 'navbar-inverse' : 'navbar-default') ?>">
  <div class="container<?php echo (bootstrap3_is_fluid_container()) ? '-fluid' : '' ?>">

    <div class="small navbar-text">

      <?php if ($wiki_info_is_enabled): ?>
      <div class="footer-dw-title row">
        <div class="media col-sm-4">
          <!--<div class="media-left">
            <img src="<?php echo $wiki_logo ?>" alt="<?php echo $wiki_title ?>" class="media-object" style="width:32px" />
          </div> -->
          <div class="media-body">
            <h4 class="media-heading">Documentation <i class="uf uf-ubuntu"></i></h4>
            <p>
              Les pages de cette documentation sont rédigées par les utilisateurs
              pour les utilisateurs. Apportez-nous votre aide pour améliorer
              le contenu de cette documentation.
            </p>
          </div>
        </div>
        <div class="col-sm-4">
          <h4>Liens utiles</h4>
          <ul class="list-group list-unstyled">
            <li>
              <?php tpl_link('/debutant', '<i class="fa fa-fw fa-child" style="font-size: 1.3em;"></i> Débuter sur Ubuntu') ?>
            </li>
            <li>
              <?php tpl_link('/wiki/participer_wiki', '<i class="fa fa-fw fa-edit" style="font-size: 1.3em;"></i> Participer à la documentation') ?>
            </li>
            <li>
              <?php tpl_link('/documentation_hors_ligne', '<i class="fa fa-fw fa-book" style="font-size: 1.3em;"></i> Documentation hors ligne') ?>
            </li>
            <li>
              <?php tpl_link('//www.ubuntu-fr.org/telechargement', '<i class="fa fa-fw fa-arrow-circle-down" style="font-size: 1.3em;"></i> Télécharger Ubuntu') ?>
            </li>
          </ul>
        </div>
        <div class="col-sm-4">
          <h4>Obtenir de l'aide</h4>
          <ul class="list-group list-unstyled">
            <li>
              <?php tpl_link("/tutoriel/comment_obtenir_une_reponse_satisfaisante", '<i class="fa fa-fw fa-info-circle" style="font-size: 1.3em;"></i> Chercher de laide') ?>
            </li>
            <li>
              <?php tpl_link('//doc.ubuntu-fr.org/', '<i class="fa fa-fw fa-book" style="font-size: 1.3em;"></i> Consulter la documentation') ?>
            </li>
            <li>
              <?php tpl_link('//forum.ubuntu-fr.org/', '<i class="fa fa-fw fa-comments" style="font-size: 1.3em;"></i> Consulter le Forum') ?>
            </li>
            <li>
              <?php tpl_link('//guide.ubuntu-fr.org/', '<i class="fa fa-fw fa-question-circle" style="font-size: 1.3em;"></i> Lisez le guide') ?>
            </li>
          </ul>
        </div>
        <p>&nbsp;</p>
      </div>
      <?php endif; ?>

      <?php if ($footer_page_exist): ?>
      <div class="footer-dw-content">
        <?php echo bootstrap3_content(tpl_include_page('footer', 0, 1, bootstrap3_conf('useACL'))); ?>
      </div>

      <p>&nbsp;</p>
      <?php endif; ?>

      <div class="footer-license row">

        <div class="col-sm-6">
          <?php if ($license_is_enabled): ?>
          <p>
            <?php bootstrap3_license('image') ?>
          </p>
          <p class="small">
            <?php bootstrap3_license('link') ?>
          </p>
          <?php endif; ?>
        </div>

        <div class="col-sm-6">
          <?php if ($badges_is_enabled): ?>
          <?php require_once('tpl_badges.php'); ?>
          <?php endif; ?>
        </div>

      </div>

    </div>

  </div>
</footer>
<?php endif; ?>
